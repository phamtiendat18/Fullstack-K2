const moment = require("moment");
const { object, string } = require("yup");
const courseModel = require("../models/course.model");
module.exports = {
  index: async (req, res) => {
    const { keyword, status } = req.query;
    const courses = await courseModel.all(keyword, status);
    const msg = req.flash("msg");
    res.render("home/index", { courses, moment, msg });
  },
  add: (req, res) => {
    res.render("home/add", { req });
  },
  handleAdd: async (req, res) => {
    const body = await req.validate(req.body, {
      name: string()
        .required("Tên bắt buộc phải nhập")
        .test("check-unique", "Tên khóa học đã tồn tại", async (value) => {
          return await courseModel.courseUnique(value);
        }),
      price: string()
        .required("Giá không được bỏ trống")
        .test("check-number", "Giá khóa học phải là số", (value) => {
          value = +value;
          if (!isNaN(value)) {
            return true;
          }
          return false;
        }),
    });
    if (body) {
      await courseModel.create(body.name, +body.price, body.status);
      req.flash("msg", "Thêm khóa học mới thành công");
      return res.redirect("/");
    }

    return res.redirect("/add");
  },
  edit: async (req, res, next) => {
    const id = req.params.id;
    req.session.currentId = id;
    let data;
    try {
      data = await courseModel.get(id);
    } catch (e) {
      return next(e);
    }
    res.render("home/edit", { data: data[0], req });
  },
  handleEdit: async (req, res) => {
    const id = req.params.id;
    const body = await req.validate(req.body, {
      name: string()
        .required("Tên bắt buộc phải nhập")
        .test("check-unique", "Tên khóa học đã tồn tại", async (value) => {
          return await courseModel.courseUnique(value);
        }),
      price: string()
        .required("Giá không được bỏ trống")
        .test("check-number", "Giá khóa học phải là số", (value) => {
          value = +value;
          if (!isNaN(value)) {
            return true;
          }
          return false;
        }),
    });
    if (body) {
      await courseModel.update(body.name, +body.price, body.status, id);
      req.flash("msg", "Sửa thông tin khóa học thành công");
      return res.redirect("/");
    }

    return res.redirect(`/edit/${id}`);
  },
  delete: async (req, res, next) => {
    const id = req.params.id;
    // console.log("id", id);
    try {
      await courseModel.destroy(id);
      req.flash("msg", "Xóa khóa học thành công");
    } catch (e) {
      return next(e);
    }
    return res.redirect("/");
  },
};
