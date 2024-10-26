const autoBind = require("auto-bind");
const {userModel} = require("../user/user.model");
const createHttpError = require("http-errors");
const {authMessage} = require("./authMessages");

const {randomInt} = require("crypto")
const jwt = require("jsonwebtoken");


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
            otpCode: randomInt(10000, 99999),
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
        const user = await this.checkExistByMobile(mobile);
        const now = new Date().getTime()
        if (user?.otp?.expiresIn < now) {
            throw new createHttpError(403, authMessage.OtpCodeExpired)
        }
        if (user?.otp?.otpCode !== code) {
            throw new createHttpError(403, authMessage.OtpCodeIsInvalid)
        }
        if (!user.verifiedMobile) {
            user.verifiedMobile = true
        }
        const accessToken = await this.signToken({mobile, id: user._id})
        user.accessToken = accessToken;
        await user.save()

        return accessToken;
    }

    async checkExistByMobile(mobile) {
        const user = await this.#model.findOne({mobile});
        if (!user) throw new createHttpError(404, authMessage.notFound)
        return user;
    }

    async signToken(payload) {
        return jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: "1y"});
    }
}

module.exports = new AuthService();
