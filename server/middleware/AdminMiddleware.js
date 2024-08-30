const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

exports.verifyToken = (req, res, next) => {
  const bearer = req.headers["authorization"];
  const token = bearer && bearer.split(" ")[1];
  if (!token) return res.status(403).json({ message: "No token provided." });

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err)
      return res.status(500).json({ message: "Failed to authenticate token." });

    req.adminId = decoded.id;
    next();
  });
};
