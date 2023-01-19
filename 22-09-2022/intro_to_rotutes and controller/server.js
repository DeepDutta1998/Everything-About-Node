const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const homeRoute = require("./routes/app.routes");
app.use(homeRoute);

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`Server is running @ http://localhost:${port}`);
});
