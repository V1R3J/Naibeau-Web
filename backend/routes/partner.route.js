import express from "express"; 
import { postPartners } from "../controllers/partner.controller.js";


const router = express.Router();

router.post("/", postPartners);

export default router; 