/**
 * @swagger
 * tags:
 *   - name: Option
 *     description: Endpoints related to creating and managing options in the Option module.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateOption:
 *       type: object
 *       required:
 *         - title
 *         - key
 *         - guid
 *         - type
 *         - category
 *       properties:
 *         title:
 *           type: string
 *         key:
 *           type: string
 *         guid:
 *           type: string
 *         type:
 *           type: string
 *           enum:
 *             - number
 *             - string
 *             - array
 *             - boolean
 *         enum:
 *           type: array
 *           items:
 *             type: string
 *         category:
 *           type: string
 */

/**
 * @swagger
 * /option:
 *   post:
 *     summary: Create a new option
 *     description: Endpoint to create a new option in the Option module
 *     tags:
 *       - Option
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/CreateOption'
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateOption'
 *     responses:
 *       201:
 *         description: Option created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Option created successfully"
 *                 option:
 *                   $ref: '#/components/schemas/CreateOption'
 */

/**
 * @swagger
 * /option/{categoryId}:
 *   get:
 *     summary: get all options of category
 *     tags:
 *       - Option
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         type: string
 *     responses:
 *       200:
 *         description: get all options of category successfully
 */

