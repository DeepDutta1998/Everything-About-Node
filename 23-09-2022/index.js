const express = require("express");
require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

const dbDriver =
  "mongodb+srv://debashis:R7KmV58sN3smMeN@cluster0.eihs8.mongodb.net/FirstApp";

const port = process.env.PORT || 3030;

mongoose
  .connect(dbDriver, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(port, () => {
      console.log("DB is connected");
      console.log(`Server is running @ http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("DB is not connected");
    console.log(err);
  });
