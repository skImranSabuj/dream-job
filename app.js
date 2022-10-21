const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("API HITTED!!");
  res.send("Welcome to Dream Job!");
});

// app.use("/api/v1/tour", TourRoute);

module.exports = app;
