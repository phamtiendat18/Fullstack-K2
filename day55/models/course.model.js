//Tư duy xây dụng model
/*
    - 1 model tương ứng với 1 table
    - 1 controller có thể có nhiều model

*/
const sql = require("../ultis/db");

module.exports = {
  all: (keyword, status) => {
    // const filter = keyword
    //   ? sql`WHERE LOWER(name) LIKE ${"%" + keyword + "%"}`
    //   : sql``;
    let filter = sql`WHERE name IS NOT NULL`;
    if (status === "active" || status === "inactive") {
      filter = sql`${filter} AND status=${status === "active" ? true : false}`;
    }
    if (keyword) {
      filter = sql`${filter} AND LOWER(name) LIKE ${"%" + keyword + "%"}`;
    }
    return sql`SELECT * FROM courses ${filter} ORDER BY id DESC`;
  },
  courseUnique: async (name, id) => {
    // const ignore = id > 0 ? sql
    const result = await sql`SELECT id FROM courses WHERE name=${name.trim()}`;
    if (result.length) {
      return false;
    }
    return true;
  },
  get: (id) => {
    return sql`SELECT * FROM courses WHERE id = ${id}`;
  },
  find: (id) => {
    return sql`SELECT * FROM courses WHERE id = ${id}`;
  },
  create: (name, price, status) => {
    return sql`INSERT INTO courses(name, price, status) VALUES(${name}, ${price}, ${
      status === "active" ? true : false
    })`;
  },
  update: (name, price, status, id) => {
    return sql`UPDATE courses SET name=${name}, price=${price}, status=${
      status === "active" ? true : false
    }, updated_at= NOW() WHERE id=${id}`;
  },
  destroy: (id) => {
    return sql`DELETE FROM courses WHERE id=${id}`;
  },
};
