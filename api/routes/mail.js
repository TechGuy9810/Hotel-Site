import express from "express";
import {Send} from '../controller/mail.js';
const router = express.Router();
router.get("/",Send);

export default router;