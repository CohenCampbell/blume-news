const express = require("express");
const router = express.Router();
const articleSchema = require("../schemas/article.json");
const jsonschema = require("jsonschema");
const { BadRequestError, UnauthorizedError } = require("../expressError");
const {
  dbConnect,
  dbDisconnect,
  User,
  Article,
} = require("../helpers.js/mongo");
const { ensureCorrectUser, ensureLoggedIn } = require("../middleware/auth");

router.post("/:username", ensureCorrectUser, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, articleSchema);
    if (!validator.valid) {
      const errs = validator.errors.map((e) => e.stack);
      throw new BadRequestError(errs);
    }
    await dbConnect();
    const user = await User.findOne({ username: req.params.username });
    const newArticle = await Article.create({
      ...req.body,
      userId: user["_id"],
    });
    console.log(newArticle);
    return res.status(201).json(newArticle);
  } catch (err) {
    next(err);
  } finally {
    await dbDisconnect();
  }
});

router.get("/", ensureLoggedIn, async function (req, res, next) {
  try {
    await dbConnect();
    const articleArr = await Article.find({}).limit(20);
    res.json(articleArr);
  } catch (err) {
    next(err);
  } finally {
    await dbDisconnect();
  }
});

module.exports = router;
