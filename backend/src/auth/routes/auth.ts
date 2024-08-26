import express, { Router } from 'express';
import * as authController from '../controllers/authController';

const router: Router = express.Router();

router.post('/ingresar', authController.ingresar);
router.post('/registrar', authController.registrar);
router.post('/recuperar', authController.recuperar);
router.post('/resetPassword', authController.resetPassword);

export default router;
