import express from 'express';
import {createProfile} from '../controllers/profileController.js';
const router = express.Router();
router.post('/create',createProfile);
export default router;