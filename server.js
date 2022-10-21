const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
// const DBConnect = require("./utils/dbConnect");

const app = require("./app");

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`App is running on port: `, port);
});
