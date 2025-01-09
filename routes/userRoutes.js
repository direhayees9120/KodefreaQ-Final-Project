import express from 'express';
import userAuth from '../middlewares/authMiddleware.js';
import { getUser, updateUser } from "../controllers/userController.js"; // Use named imports

const router = express.Router();

// GET USER
router.get('/get-User', userAuth, getUser);

// UPDATE USER || PUT
router.put('/update-User', userAuth, updateUser);

export default router;
