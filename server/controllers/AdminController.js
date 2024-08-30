const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

exports.register = (req, res) => {
  const { name, email, password } = req.body;

  Admin.findByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    Admin.create({ name, email, password }, (err) => {
      if (err) return res.status(500).json({ message: err });
      res.status(201).json({ message: "Admin registered successfully" });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  Admin.findByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const admin = results[0];
    const passwordIsValid = bcrypt.compareSync(password, admin.password);

    if (!passwordIsValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: admin.id }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });

    res.status(200).json({ message: "Login successful", token });
  });
};

exports.getProfile = (req, res) => {
  Admin.findById(req.adminId, (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length === 0) {
      return res.status(404).json({ message: "Admin not found" });
    }

    let admin = results[0];
    delete admin.password;

    res.status(200).json(admin);
  });
};
