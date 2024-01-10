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
  register: (req, res) => {
    if (req.session.user) {
      return res.redirect("/");
    }
    const msg = req.flash("msg");
    res.render("auth/register", { req, msg });
  },
  handleRegister: async (req, res) => {
    const body = await req.validate(req.body, {
      name: string().required("Tên không được bỏ trống"),
      email: string().required("Email không được bỏ trống"),
      password: string().required("Mật khẩu không được bỏ trống"),
      rePassword: string().required("Mật khẩu không được bỏ trống"),
    });
    if (body) {
      const checkEmail = await User.findOne({
        where: {
          email: body.email,
        },
      });
      if (checkEmail) {
        req.flash("success", { success: false });
        req.flash("msg", "Đăng ký thất bại");
        req.flash("errors", { email: "Email đã đã được sử dụng" });
        return res.redirect("/dang-ky");
      }
      const regex = /.{8,}/;
      if (!regex.test(body.password)) {
        req.flash("errors", { password: "Mật khẩu phải nhiều hơn 8 ký tự" });
        return res.redirect("/dang-ky");
      }
      if (body.password !== body.rePassword) {
        req.flash("success", { success: false });
        req.flash("msg", "Đăng ký thất bại");
        req.flash("errors", { rePassword: "Mật khẩu không trùng khớp" });
        return res.redirect("/dang-ky");
      }
      const correctPassword = await hashPassword(body.password);
      const newUser = await User.create({
        name: body.name,
        email: body.email,
        password: correctPassword,
      });
      req.flash("success", { success: true });
      req.flash("msg", "Đăng ký thành công");
      return res.redirect("/dang-nhap");
    } else {
      return res.redirect("/dang-ky");
    }
  },
  login: async (req, res) => {
    const msg = req.flash("msg");
    if (req.session.user) {
      return res.redirect("/");
    }
    const successOb = req.flash("success");
    let success;
    if (successOb.length) {
      success = successOb[0].success;
    }
    res.render("auth/login", { req, msg, success });
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
          req.flash("success", { success: false });
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
              req.flash("msg", "Đăng nhập thành công");
              return res.redirect("/");
            } else {
              req.flash("success", { success: false });
              req.flash("old", body);
              req.flash("msg", "Tài khoản hoặc mật khẩu không đúng");
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
