const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authControler");

const router = express.Router();

router.route("/sign-up").post(authController.sign_up);
router.route("/").get(userController.get_users);

module.exports = router;
