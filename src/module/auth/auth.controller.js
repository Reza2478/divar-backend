const autoBind = require("auto-bind");
const authService = require("./auth.service");
const {authMessage} = require("./authMessages");

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
            return {
                message: authMessage.otpSentSuccessfully
            }
        } catch (error) {
            next(error);
        }
    }

    async checkOtp(req, res, next) {
        try {
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AuthController();
