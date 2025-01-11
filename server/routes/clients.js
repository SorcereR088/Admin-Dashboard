import express from 'express';
const router = express.Router();
import { allClients } from '../controllers/clients.js';

router.get("/", allClients)

export default router;