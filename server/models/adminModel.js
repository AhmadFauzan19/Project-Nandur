const db = require("../config/db");
const bcrypt = require("bcryptjs");

const Admin = {
  create: (adminData, callback) => {
    const { name, email, password } = adminData;
    const hashedPassword = bcrypt.hashSync(password, 10);

    db.query(
      "INSERT INTO admin (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword],
      callback
    );
  },

  findByEmail: (email, callback) => {
    db.query("SELECT * FROM admin WHERE email = ?", [email], callback);
  },
  findById: (id, callback) => {
    db.query("SELECT * FROM admin WHERE id = ?", [id], callback);
  },
};

module.exports = Admin;
