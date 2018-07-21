var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/", function(req, res, next) {
	res.render("index", { title: "Express" });
});

const MemberModifyMethod = require("../controllers/modify_controller");
const memberModifyMethod = new MemberModifyMethod();
router.post("/register", memberModifyMethod.postRegister);

router.post("/login", memberModifyMethod.postLogin);

router.put('/update', memberModifyMethod.putUpdate);

module.exports = router;
