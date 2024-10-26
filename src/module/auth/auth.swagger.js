/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Authentication Module and Routes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SendOTP:
 *       type: object
 *       required:
 *         - mobile
 *       properties:
 *         mobile:
 *           type: string
 *           description: The mobile number to send the OTP to
 *           example: "09167010634"
 *     CheckOTP:
 *       type: object
 *       required:
 *         - mobile
 *         - code
 *       properties:
 *         mobile:
 *           type: string
 *           description: The mobile number to send the OTP to
 *           example: "09167010634"
 *         code:
 *           type: string
 */

/**
 * @swagger
 * /auth/send-otp:
 *   post:
 *     summary: Send OTP for authentication
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: "#/components/schemas/SendOTP"
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/SendOTP"
 *     responses:
 *       200:
 *         description: OTP sent successfully
 */



/**
 * @swagger
 * /auth/check-otp:
 *   post:
 *     summary: Check Otp for login user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: "#/components/schemas/CheckOTP"
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CheckOTP"
 *     responses:
 *       200:
 *         description: success
 */

