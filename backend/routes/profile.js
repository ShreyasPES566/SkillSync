import express from 'express';
import {createProfile, getProfileByUserId, updateProfile} from '../controllers/profileController.js';
const router = express.Router();
router.post('/create',createProfile);
router.get('/:userId',getProfileByUserId);
router.put('/update/:userId',updateProfile);
export default router;