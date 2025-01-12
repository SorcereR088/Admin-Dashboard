import express from 'express';
import { 
  Properties, 
  allProperties, 
  updateProperty, 
  deleteProperty 
} from '../controllers/properties.js';

const router = express.Router();

router.get("/", Properties);
router.get("/all", allProperties);
router.put("/:id", updateProperty);
router.delete("/:id", deleteProperty);

export default router;