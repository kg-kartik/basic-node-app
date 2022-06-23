const express = require("express");
const res = require("express/lib/response");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("lol");
});

app.listen(port, () => {
  console.log("server running");
});
