const {Router} = require("express");
const authController = require("./auth.controller");
const Authorization = require('../../common/guard/authorization.guard')

const router = new Router();

router.post("/send-otp", authController.sendOtp);
router.post("/check-otp", authController.checkOtp);
router.get("/logout", Authorization, authController.logout);

module.exports = {
    AuthRouter: router,
};
