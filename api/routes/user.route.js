import express from 'express';
import { deleteUSer, updateUSer, getUserListings } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post("/update/:id", verifyToken, updateUSer);
router.delete("/delete/:id", verifyToken, deleteUSer);
router.get("/listings/:id", verifyToken, getUserListings);

export default router;