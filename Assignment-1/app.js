const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const app = express();

app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(
  bodyParser.json({
    limit: "8mb"
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "8mb",
    extended: true
  })
);
app.use(upload.array());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.render("form");
});

app.post("/form/feedback", function(req, res) {
  const feedback = req.body;
  res.json({
    success: true,
    message: "Thank you for your feedback.",
    feedback
  });
});

module.exports = app;
