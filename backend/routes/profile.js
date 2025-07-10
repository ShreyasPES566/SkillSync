import express from 'express';
import {createProfile, getProfileByUserId} from '../controllers/profileController.js';
const router = express.Router();
router.post('/create',createProfile);
router.get('/:userId',getProfileByUserId);
export default router;