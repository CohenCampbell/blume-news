const mongoose = require("mongoose");
require("dotenv").config();

const uri =
  process.env.NODE_ENV === "test"
    ? process.env.MONGO_TEST_URI
    : process.env.MONGO_URI;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function dbConnect() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
  } catch (err) {
    console.error("Connection Error:", err);
  }
}

async function dbDisconnect() {
  try {
    await mongoose.disconnect();
  } catch (err) {
    console.log("Disconnect Error:", err);
  }
}

async function testConnection() {
  try {
    await dbConnect();
    console.log("Test: You successfully connected to MongoDB!");
  } catch (err) {
    console.error("Connection Test Error:", err);
  } finally {
    await dbDisconnect();
    console.log("Test: Connection from MongoDB disconnected!");
  }
}

//users schema is epmty because I'm using json schema instead
const User = mongoose.model(
  "users",
  new mongoose.Schema({}, { strict: false })
);

//article schema is epmty because I'm using json schema instead
const Article = mongoose.model(
  "articles",
  new mongoose.Schema({}, { strict: false })
);

module.exports = { dbConnect, dbDisconnect, testConnection, User, Article };
