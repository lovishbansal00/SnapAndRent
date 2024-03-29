import express from 'express';
import { google, logout, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/login", signin);
router.post("/google", google);
router.get("/logout", logout);


export default router;