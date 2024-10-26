const {Router} = require("express");
const {AuthRouter} = require("./module/auth/auth.routes");
const {UserRouter} = require("./module/user/user.routes");

const Authorization = require("./common/guard/authorization.guard")


const mainRouter = Router();

mainRouter.use("/auth", AuthRouter);
mainRouter.use("/user", Authorization, UserRouter);


module.exports = mainRouter;
