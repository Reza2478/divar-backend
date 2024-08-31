const { default: autoBind } = require("auto-bind");

class AuthService {
  constructor() {
    autoBind(this);
  }
  async sendOtp(mobile) {}

  async checkOtp(mobile, code) {}
}

module.exports = new AuthService();
