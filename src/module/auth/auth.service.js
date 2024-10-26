const autoBind = require("auto-bind");
const {userModel} = require("../user/user.model");
const createHttpError = require("http-errors");
const {authMessage} = require("./authMessages");

const {randomInt} = require("crypto")


class AuthService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = userModel
    }

    async sendOtp(mobile) {
        const user = await this.#model.findOne({mobile});
        const now = new Date().getTime()
        const otp = {
            code: randomInt(10000, 99999),
            expiresIn: now + (1000 * 60 * 2)
        }
        if (!user) {
            return await this.#model.create({
                mobile,
                otp,
            });
        }

        if (user.otp && user.otp.expiresIn > now) {
            throw new createHttpError(400, authMessage.OtpCodeNotExpired)
        }

        user.otp = otp
        await user.save();
    }

    async checkOtp(mobile, code) {
    }

    async checkExistByMobile(mobile) {
        const user = await this.#model.findOne({mobile});
        if (!user) throw new createHttpError(404, authMessage.notFound)
        return user;
    }
}

module.exports = new AuthService();
