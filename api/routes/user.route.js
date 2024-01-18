import express from 'express';
import { deleteUSer, updateUSer } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post("/update/:id", verifyToken, updateUSer);
router.delete("/delete/:id", verifyToken, deleteUSer);

export default router;