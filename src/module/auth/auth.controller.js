const autoBind = require("auto-bind");
const authService = require("./auth.service");
const {authMessage} = require("./auth.messages");
const NodeEnv = require("../../common/constant/env.enum");
const CookieName = require("../../common/constant/cookie.enm");

class AuthController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = authService;
    }

    async sendOtp(req, res, next) {
        try {
            const {mobile} = req.body;
            await this.#service.sendOtp(mobile);
            return res.json({
                message: authMessage.otpSentSuccessfully
            })
        } catch (error) {
            next(error);
        }
    }

    async checkOtp(req, res, next) {
        try {
            const {mobile, code} = req.body;
            const token = await this.#service.checkOtp(mobile, code);
            res.cookie(CookieName.AccessToken, token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== NodeEnv.Development
            });
            return res.json({
                message: authMessage.LoginSuccessfully,
                token
            })
        } catch (error) {
            next(error);
        }
    }

    async logout(req, res, next) {
        try {
            res.clearCookie(CookieName.AccessToken).status(200).json({
                message: authMessage.LogOutSuccessfully
            });

        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AuthController();
