const express = require("express");
const router = express.Router();
const adminController = require("../controllers/AdminController");
const { validateRegisterData } = require("../middleware/validationMiddleware");
const { verifyToken } = require("../middleware/AdminMiddleware");

router.post("/register", validateRegisterData, adminController.register);
router.post("/login", adminController.login);
router.get("/profile", verifyToken, adminController.getProfile);

module.exports = router;
