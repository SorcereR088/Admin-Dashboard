import express from 'express';
import { allProperties } from '../controllers/properties.js'; 

const router = express.Router();

router.get("/", allProperties);


export default router;
