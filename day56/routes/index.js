const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

var express = require("express");
var router = express.Router();
const authController = require("../controllers/auth.controller");
/* GET home page. */
router.get("/", (req, res, next) => {
  // const userInfo = {
  //   name: req.session.user.name,
  //   email: req.session.user.email,
  // };
  let userInfo;
  let msg;
  if (req.session.user) {
    userInfo = {
      name: req.session.user.name,
      email: req.session.user.email,
    };
    // req.message = { msg: "Chào mừng bạn đã quay trở lại" };
    msg = req.flash("msg");
  } else {
    return res.redirect("/dang-nhap");
  }
  res.render("index", { userInfo, msg });
});
router.get("/dang-nhap", authController.login);
router.post("/dang-nhap", authController.handleLogin);
router.post("/log-out", authController.handleLogout);
router.get("/dang-ky", authController.register);
router.post("/dang-ky", authController.handleRegister);

module.exports = router;
