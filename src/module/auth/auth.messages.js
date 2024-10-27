const authMessage = Object.freeze({
    otpSentSuccessfully: "send otp has been successfully",
    notFound: "user not found",
    OtpCodeNotExpired: "otp code not expired please try later!",
    OtpCodeExpired: "otp code expired please try to get new code!",
    LoginSuccessfully: "login has been successfully!",
    OtpCodeIsInvalid: "otp code does not correct!",
    LogOutSuccessfully: "logout has been successfully!",
})

module.exports = {
    authMessage,
};