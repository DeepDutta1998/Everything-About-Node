const student = require("../model/student.model");

exports.create = (req, res) => {
  res.render("index", {
    page_title: "Home",
  });
};

/**
 * @Method insert
 * @Description Insert User Data
 */

exports.insert = (req, res) => {
  console.log(req.body);
  let fullName = `${req.body.firstName} ${req.body.lastName}`;
  console.log(fullName);
};
