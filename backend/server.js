const app = require("./app");
require("dotenv").config();
const { testConnection } = require("./helpers.js/mongo");

const PORT = +process.env.PORT || 8000;

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});

testConnection();
