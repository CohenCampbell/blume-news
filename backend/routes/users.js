const express = require("express");
const router = express.Router();
const signUpSchema = require("../schemas/signUp.json");
const loginSchema = require("../schemas/login.json");
const jsonschema = require("jsonschema");
const { BadRequestError, UnauthorizedError } = require("../expressError");
const bcrypt = require("bcrypt");
const { dbConnect, dbDisconnect, User } = require("../helpers.js/mongo");
const { createToken } = require("../helpers.js/tokens");
const { ensureCorrectUser } = require("../middleware/auth");

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

router.post("/signUp", async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, signUpSchema);
    if (!validator.valid) {
      const errs = validator.errors.map((e) => e.stack);
      throw new BadRequestError(errs);
    }
    const hashedPassword = await bcrypt.hash(
      req.body.password,
      BCRYPT_WORK_FACTOR
    );
    req.body.password = hashedPassword;

    await dbConnect();

    const dupeCheck = await User.findOne({ username: req.body.username });
    if (dupeCheck) {
      throw new BadRequestError(
        `Sorry, "${req.body.username}" is being used by someone else!`
      );
    }

    const newUser = await User.create(req.body);
    const newUserEmail = newUser.email;
    const newUsername = newUser.username;
    return res.status(201).json({
      token: createToken(req.body.username),
      email: newUserEmail,
      username: newUsername,
    });
  } catch (err) {
    return next(err);
  } finally {
    await dbDisconnect();
  }
});

router.post("/login", async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, loginSchema);
    if (!validator.valid) {
      const errs = validator.errors.map((e) => e.stack);
      throw new BadRequestError(errs);
    }

    await dbConnect();

    const getUser = await User.findOne({ username: req.body.username });
    if (!getUser)
      throw new BadRequestError(
        `Sorry, "${req.body.username}" does not exist!`
      );

    const correctPassord = await bcrypt.compare(
      req.body.password,
      getUser.password
    );

    if (!correctPassord)
      throw new UnauthorizedError("Invalid username/password");

    const getUserEmail = getUser.email;
    const getUsername = getUser.username;
    return res.json({
      token: createToken(req.body.username),
      email: getUserEmail,
      username: getUsername,
    });
  } catch (err) {
    return next(err);
  } finally {
    await dbDisconnect();
  }
});

router.delete("/:username", ensureCorrectUser, async function (req, res, next) {
  try {
    User.deleteOne({ username: req.params.username });
    return res.json({ response: "User was deleted!" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
