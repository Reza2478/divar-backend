/**
 * @swagger
 * tags:
 *   - name: User
 *     description: User Module and Routes
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
 */

/**
 * @swagger
 * /user/whoami:
 *   get:
 *     summary: get user information
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: OTP sent successfully
 */

