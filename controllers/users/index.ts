import express from "express"

const userManager = require("./userManager");

const router = express.Router();

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get the user details
 *     description: Get the user details
 *     parameters:
 *        - in: path
 *          name: user_id
 *          required: true
 *          description: The user's unique id
 *          schema:
 *            type: string
 *     responses:
 *       200:
 *         description: Successfully fetched the user's details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                  type: number
 *                  description: Response status code
 *                  example: 200
 *                 message:
 *                  type: number
 *                  description: Response message if any
 *                  example: OK
 *                 payload:
 *                   type: object
 *                   properties:
 *                     user_id:
 *                       type: string
 *                       description: The user's id
 *                       example: dbc725e1-9001-471e-be44-7c9ea98e809f
 *                     first_name:
 *                       type: string
 *                       description: User's first name
 *                       example: John
 *                     last_name:
 *                       type: string
 *                       description: User's last name
 *                       example: Doe
 *                     email_id:
 *                       type: string
 *                       description: User's email id
 *                       example: john.doe@gmail.com
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                  type: number
 *                  description: Response status code
 *                  example: 404
 *                 message:
 *                  type: number
 *                  description: Response message if any
 *                  example: Resource not found
 */
router.get("/:userId", userManager.getUserById);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: User's first name
 *                 example: John
 *               last_name:
 *                 type: string
 *                 description: User's last name
 *                 example: Doe
 *               email_id:
 *                 type: string
 *                 description: User's emailid
 *                 example: john.doe@gmail.com
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                  type: number
 *                  description: Response status code
 *                  example: 201
 *                 message:
 *                  type: number
 *                  description: Response message if any
 *                  example: OK
 *                 payload:
 *                  type: string
 *                  description: The newly created user's id
 *                  example: 574ae8bb-e1a4-4a17-8178-01034df2ab60
 *       500:
 *         description: Failed to create user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                  type: number
 *                  description: Response status code
 *                  example: 500
 *                 message:
 *                  type: number
 *                  description: Response message if any
 *                  example: Email ID is required
 */
router.post("/", userManager.createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update an existing user
 *     parameters:
 *        - in: path
 *          name: user_id
 *          required: true
 *          description: The user's unique id
 *          schema:
 *            type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: User's first name
 *                 example: John
 *               last_name:
 *                 type: string
 *                 description: User's last name
 *                 example: Doe
 *               email_id:
 *                 type: string
 *                 description: User's emailid
 *                 example: john.doe@gmail.com
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                  type: number
 *                  description: Response status code
 *                  example: 200
 *                 message:
 *                  type: number
 *                  description: Response message if any
 *                  example: OK
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                  type: number
 *                  description: Response status code
 *                  example: 404
 *                 message:
 *                  type: number
 *                  description: Response message if any
 *                  example: Resource not found
 */
router.put("/:userId", userManager.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete user
 *     description: Delete a specific user by id
 *     parameters:
 *        - in: path
 *          name: user_id
 *          required: true
 *          description: The user's unique id
 *          schema:
 *            type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                  type: number
 *                  description: Response status code
 *                  example: 200
 *                 message:
 *                  type: number
 *                  description: Response message if any
 *                  example: OK
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                  type: number
 *                  description: Response status code
 *                  example: 404
 *                 message:
 *                  type: number
 *                  description: Response message if any
 *                  example: Resource not found
 */
router.delete("/:userId", userManager.deleteUser);

module.exports = router;
