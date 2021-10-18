const express = require("express");
const app = express();
const port = 3000;

const logger = () => (req, res, next) => {
  console.log(`request ${req.path}`);
  next();
};

app.get("/", logger(), (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
