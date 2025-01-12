import express from 'express';
import { Properties , allProperties} from '../controllers/properties.js'; 

const router = express.Router();
router.get("/", Properties);
router.get("/all", allProperties )


export default router;
