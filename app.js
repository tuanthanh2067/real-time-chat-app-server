const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const routes = require("./routes/index");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Api server's working");
});

module.exports = app;
