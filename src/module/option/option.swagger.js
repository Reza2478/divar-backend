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
 *         required:
 *           type: boolean
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
 *     UpdateOption:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         key:
 *           type: string
 *         guid:
 *           type: string
 *         required:
 *           type: boolean
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
 * /option/{id}:
 *   put:
 *     summary: update an option
 *     description: Endpoint to update an option in the Option module
 *     tags:
 *       - Option
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/UpdateOption'
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateOption'
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *     responses:
 *       200:
 *         description: Option updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Option updated successfully"
 *                 option:
 *                   $ref: '#/components/schemas/UpdateOption'
 */

/**
 * @swagger
 * /option/by-category/{categoryId}:
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

/**
 * @swagger
 * /option/by-category-slug/{slug}:
 *   get:
 *     summary: get all options of category
 *     tags:
 *       - Option
 *     parameters:
 *       - in: path
 *         name: slug
 *         type: string
 *     responses:
 *       200:
 *         description: get all options of category successfully
 */

/**
 * @swagger
 * /option/{id}:
 *   get:
 *     summary: get option by id
 *     tags:
 *       - Option
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *     responses:
 *       200:
 *         description: get all options of category successfully
 */

/**
 * @swagger
 * /option/{id}:
 *   delete:
 *     summary: delete option by id
 *     tags:
 *       - Option
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *     responses:
 *       200:
 *         description: remove option has been successfully
 */

/**
 * @swagger
 * /option:
 *   get:
 *     summary: get all options
 *     tags:
 *       - Option
 *
 *     responses:
 *       200:
 *         description: get all options of category successfully
 */

