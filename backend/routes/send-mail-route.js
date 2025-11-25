import express from 'express';
import sendMail from '../controllers/send-mail-controller.js';
const router = express.Router();

router.post('/send-mail', sendMail);

export default router;