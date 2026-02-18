import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// Routes for Signup 
router.post("/signup", signup);

// Route for Login
router.post("/login", login);

// Route for Logout
router.post("/logout", logout);

export default router;