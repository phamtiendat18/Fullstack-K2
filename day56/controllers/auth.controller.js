const { string } = require("yup");
const { Op } = require("sequelize");
const model = require("../models/index");
const User = model.Auth;
const bcrypt = require("bcrypt");
const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};
module.exports = {
  login: async (req, res) => {
    const msg = req.flash("msg");
    console.log(msg);
    if (req.session.user) {
      return res.redirect("/");
    }
    res.render("auth/login", { req, msg });
  },
  handleLogin: async (req, res) => {
    const body = await req.validate(req.body, {
      email: string().required("Email không được bỏ trống"),
      password: string().required("Mật khẩu không được bỏ trống"),
    });
    if (body) {
      try {
        const check = await User.findOne({
          where: {
            email: body.email,
          },
        });
        // console.log("checked:", check);
        // console.log(admin[0].dataValues.password);
        if (!check) {
          req.flash("msg", "Tài khoản hoặc mật khẩu không chính xác");
          req.flash("old", body);
          return res.redirect("/dang-nhap");
        }
        // console.log(admin);

        bcrypt.compare(
          body.password,
          check.dataValues.password,
          (err, result) => {
            if (result) {
              req.session.user = check.dataValues;
              // console.log(req.session);
              req.flash("msg", "Đăng nhập thành công");
              return res.redirect("/");
            } else {
              req.flash("old", body);
              req.flash("errors", { password: "Mật khẩu không chính xác" });
              return res.redirect("/dang-nhap");
            }
          }
        );
      } catch (e) {
        console.log(e);
        req.flash("msg", "Tài khoản hoặc mật khẩu không đúng");
      }
    } else {
      return res.redirect("/dang-nhap");
    }
  },
  handleLogout: async (req, res) => {
    req.session.destroy((err) => {
      console.log(err);
    });
    return res.redirect("/");
  },
};
