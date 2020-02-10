const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { test: "test" });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
