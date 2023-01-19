const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

/* app.get("/", (req, res) => {
  res.send("<h1>Hello!!!!</h1>");
});

app.get("/about-me", (req, res) => {
  res.send("<h1>About-me</h1>");
}); */

app.get("/", (req, res) => {
  res.render("home", {
    page_title: "Jhon | Home",
  });
});

app.get("/about-me", (req, res) => {
  res.render("about", {
    page_title: "Jhon | About-me",
  });
});

app.get("/contact-me", (req, res) => {
  res.render("contact", {
    page_title: "Jhon | Contact-me",
  });
});

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`Server is running @ http://localhost:${port}`);
});
