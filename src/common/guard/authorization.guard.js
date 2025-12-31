const createHttpError = require("http-errors");
const authorizationMessage = require("../messages/auth.message")
const jwt = require("jsonwebtoken");
const {UserModel} = require("../../module/user/user.model");

require("dotenv").config();

const Authorization = async (req, res, next) => {
    try {
        const token = req?.cookies?.access_token;

        if (!token) {
            throw new createHttpError(401, authorizationMessage.Login)
        }
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (typeof data === "object" && "id" in data) {
            const user = await UserModel.findById(data.id, {
                accessToken: 0,
                otp: 0,
                verifiedMobile: 0,
                __v: 0,
                updatedAt: 0
            }).lean()
            console.log("user", user)
            if (!user) throw new createHttpError(404, authorizationMessage.NotFoundAccount)
            req.user = user
            return next()
        }

        throw new createHttpError(401, authorizationMessage.InvalidToken)

    } catch (error) {
        next(error);
    }
}

module.exports = Authorization;
