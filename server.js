const express = require("express");

const mongoDB = require("./config/db");

const app = express();

mongoDB();

// Init Middleware
app.use(
  express.json({
    extended: false
  })
);

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { test: "test" });
});

const graphRoutes = require("./routes/api/graph");

app.use("/api/graph", graphRoutes);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
