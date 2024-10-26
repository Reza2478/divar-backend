const {Router} = require("express");
const userController = require("./user.controller");

const router = new Router();

router.get("/whoami", userController.whoami);

module.exports = {
    UserRouter: router,
};
