const { Router } = require("express");
const authController = require("./auth.controller");

const router = new Router();

router.use("/send-otp", authController.sendOtp);
router.use("/check-otp", authController.checkOtp);

module.exports = {
  AuthRouter: router,
};
