/* 
core Module==> Path 

*/
require("dotenv").config();

const path = require("path");
/*
console.log(path.basename(__filename));
console.log(__filename);

//Extension name
console.log(path.extname(__filename));

//Parse
let myParseDetails = path.parse(__filename);
console.log(myParseDetails);
console.log(myParseDetails.name);

//Join
console.log(path.join(__dirname, "node", "intro-to-node"));

console.log(__filename);
console.log(__dirname); */

/* 
os module
*/

/* const os = require("os");

console.log("Os type ==>", os.type());
console.log("Os platform ==>", os.platform());
console.log("Os arch ==>", os.arch());
console.log("Free memory ==>", os.freemem());
console.log("Total memory ==>", os.totalmem()); */

//File system

//Create Folder

const fs = require("fs");

/* fs.mkdir(path.join(__dirname, "Node", "NodeJs"), (err) => {
  if (err) {
    console.log(err);
    console.log("Folder already exists");
    return;
  }
  console.log("Folder is created");
}); */

//Write a file

/* fs.writeFile(
  path.join(__dirname, "Node", "NodeJs", "coreModule.txt"),
  "Welcome to NodeJs!!!",
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File is created");
  }
); */

//Read file

/* fs.readFile(
  path.join(__dirname, "Node", "NodeJs", "coreModule.txt"),
  "utf-8",
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
    console.log(data.toString());
  }
); */

//Http Module

const http = require("http");

const app = http.createServer((req, res) => {
  res.end("<h1>Hello World!!!</h1>");
});

const port = process.env.PORT || 1990;

app.listen(port, () => {
  console.log(port);
  // console.log(process.env.DB_USERNAME);
  console.log("Application is Runs Successfully");
});
