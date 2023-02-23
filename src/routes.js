import express from 'express';
import * as userController from './userController.js';

const router = express.Router();

router.get('/signup', userController.signup_get);
router.post('/signup', userController.signup_post);

export default router;