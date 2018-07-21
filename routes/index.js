var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/", function(req, res, next) {
	res.render("index", { title: "Express" });
});

const MemberModifyMethod = require("../controllers/modify_controller");
const memberModifyMethod = new MemberModifyMethod();

// 註冊新會員
router.post("/register", memberModifyMethod.postRegister);

// 會員登入
router.post("/login", memberModifyMethod.postLogin);

// 更新會員資料
router.put("/update", memberModifyMethod.putUpdate);

// 更新會員資料（檔案上傳示範，可直接取代/member的PUT method）
router.put("/updateimg", memberModifyMethod.putUpdateImage);

module.exports = router;
