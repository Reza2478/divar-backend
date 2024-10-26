const {Schema, model} = require("mongoose");

const OTPSchema = new Schema({
    otpCode: {type: "string", default: undefined},
    expiresIn: {type: "number", default: 0},
});

const UserSchema = new Schema(
    {
        fullName: {type: String, required: false},
        mobile: {type: String, required: true, unique: true},
        otp: {type: OTPSchema, required: false},
        verifiedMobile: {type: Boolean, required: true, default: false},
        accessToken: {type: String}
    },
    {
        timestamps: true,
    }
);

const userModel = model("user", UserSchema);

module.exports = {
    userModel,
};
