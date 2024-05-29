const request = require("supertest");
const {
  dbConnect,
  dbDisconnect,
  User,
  Article,
} = require("../../helpers.js/mongo");
const app = require("../../app");
let testUser;
const { createToken } = require("../../helpers.js/tokens");

beforeAll(async function () {
  try {
    const testUserData = {
      username: "test1",
      firstName: "Test",
      lastName: "One",
      password: "test-password",
      email: "emailtest@email.com",
    };

    testUser = await request(app).post("/users/signup").send(testUserData);
    testUser = testUser.body;
  } catch (err) {
    console.error(err);
  }
});

afterAll(async function () {
  try {
    await dbConnect();
    await User.deleteMany({});
    await Article.deleteMany({});
  } catch (err) {
    console.error(err);
  } finally {
    await dbDisconnect();
  }
});

describe("/articles/ routes", function () {
  test("Works for correct user with correct shema", async function () {
    const testArticleData = {
      author: "test1",
      title: "Test Article",
      content: "This is a test!!",
    };

    const resp = await request(app)
      .post(`/articles/${testUser.username}`)
      .send(testArticleData)
      .set("authorization", `Bearer ${testUser.token}`);
    expect(resp.statusCode).toEqual(201);
    expect(resp.body.author).toEqual("test1");
    expect(resp.body.title).toEqual("Test Article");
    expect(resp.body.content).toEqual("This is a test!!");
  });

  test("bad request if missing data", async function () {
    const testArticleData = {
      author: "test1",
      title: "Test Article",
    };

    const resp = await request(app)
      .post(`/articles/${testUser.username}`)
      .send(testArticleData)
      .set("authorization", `Bearer ${testUser.token}`);
    expect(resp.statusCode).toEqual(400);
  });

  test("bad request if invalid data", async function () {
    const testArticleData = {
      author: "",
      title: "Test Article",
      content: "This is a test!!",
    };

    const resp = await request(app)
      .post(`/articles/${testUser.username}`)
      .send(testArticleData)
      .set("authorization", `Bearer ${testUser.token}`);
    expect(resp.statusCode).toEqual(400);
  });

  test("bad request if invalid auth", async function () {
    const testArticleData = {
      author: "test1",
      title: "Test Article",
      content: "This is a test!!",
    };

    const resp = await request(app)
      .post(`/articles/${testUser.username}`)
      .send(testArticleData)
      .set("authorization", `Bearer 100`);
    expect(resp.statusCode).toEqual(401);
  });

  test("bad request if invalid auth", async function () {
    const testArticleData = {
      author: "test1",
      title: "Test Article",
      content: "This is a test!!",
    };

    const resp = await request(app)
      .post(`/articles/${testUser.username}`)
      .send(testArticleData)
      .set("authorization", `Bearer 100`);
    expect(resp.statusCode).toEqual(401);
  });

  test("get articles", async function () {
    const testArticleData = {
      author: "test1",
      title: "Test Article",
      content: "This is a test!!",
    };

    const resp = await request(app)
      .post(`/articles/${testUser.username}`)
      .send(testArticleData)
      .set("authorization", `Bearer ${testUser.token}`);
    expect(resp.statusCode).toEqual(201);

    const resp2 = await request(app)
      .get("/articles")
      .set("authorization", `Bearer ${testUser.token}`);
    expect(resp2.statusCode).toEqual(200);
  });
});
