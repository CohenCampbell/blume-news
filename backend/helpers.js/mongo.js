const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;
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
    console.log("Test: Connection Disconnected!");
  }
}

module.exports = { dbConnect, dbDisconnect, testConnection };
