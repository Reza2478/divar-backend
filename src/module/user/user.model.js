const {Schema, model} = require("mongoose");

const OTPSchema = new Schema({
    otpCode: {type: String, default: undefined, required: false},
    expiresIn: {type: Number, default: 0, required: false},
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

const UserModel = model("user", UserSchema);

module.exports = {
    UserModel
}
