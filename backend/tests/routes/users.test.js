const request = require("supertest");
const { dbConnect, dbDisconnect, User } = require("../../helpers.js/mongo");
const app = require("../../app");

afterAll(async function () {
  try {
    await dbConnect();
    await User.deleteMany({});
  } catch (err) {
    console.error(err);
  } finally {
    await dbDisconnect();
  }
});

describe("/users/ routes", function () {
  test("Works for anyone with correct Shema", async function () {
    const testUserData = {
      username: "test1",
      firstName: "Test",
      lastName: "One",
      password: "test-password",
      email: "emailtest@email.com",
    };

    const resp = await request(app).post("/users/signup").send(testUserData);
    expect(resp.statusCode).toEqual(201);
    expect(resp.body).toEqual({
      token: expect.any(String),
      email: testUserData.email,
      username: testUserData.username,
    });
  });

  test("bad request if missing data", async function () {
    const resp = await request(app).post("/users/signup").send({
      username: "u-new",
    });

    expect(resp.statusCode).toEqual(400);
  });

  test("bad request if invalid data", async function () {
    const resp = await request(app).post("/users/signup").send({
      username: "u-new",
      firstName: "First-new",
      lastName: "Last-newL",
      password: "password-new",
      email: "not-an-email",
    });

    expect(resp.statusCode).toEqual(400);
  });

  test("delete users/:username correct auth", async function () {
    const testUserData = {
      username: "test2",
      firstName: "Test",
      lastName: "Two",
      password: "password-new",
      email: "email@email.com",
    };

    const resp = await request(app).post("/users/signup").send(testUserData);

    expect(resp.statusCode).toEqual(201);

    const resp2 = await request(app)
      .delete(`/users/${testUserData.username}`)
      .set("authorization", `Bearer ${resp.body.token}`);

    expect(resp2.body).toEqual({
      response: "User was deleted!",
    });
  });

  test("delete users/:username incorrect auth", async function () {
    const testUserData = {
      username: "test3",
      firstName: "Test",
      lastName: "Three",
      password: "password-new",
      email: "email@email.com",
    };

    const resp = await request(app).post("/users/signup").send(testUserData);

    expect(resp.statusCode).toEqual(201);

    const resp2 = await request(app)
      .delete(`/users/${testUserData.username}`)
      .set("authorization", `Bearer 123`);

    expect(resp2.statusCode).toEqual(401);
  });
});
