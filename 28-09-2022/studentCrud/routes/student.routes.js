const router = require("express").Router();
const studentController = require("../controllers/student.controller");

router.get("/", studentController.create);
router.post("/insert", studentController.insert);

module.exports = router;
