//authController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import moment from 'moment';
import { db } from '../../config/db';
import { recoverPasswordTemplate } from '../../templates/recoverPasswordTemplate';
import { generateVerificationCode } from '../utils/generateVerificationCode';

// Definir constantes para las consultas SQL
const SELECT_USER_BY_EMAIL = 'select * from usuarios where user_email = ?';
const INSERT_USER = 'insert into usuarios (user_nom, user_apels, user_email, user_pass, id_rol) values (?, ?, ?, ?, 3)';
const UPDATE_USER_RESET_CODE = 'update usuarios set user_reset_code = ?, user_reset_code_expiration = ? where id_user = ?';
const SELECT_USER_BY_RESET_CODE = 'select * from usuarios where user_reset_code = ? and user_reset_code_expiration > ?';
const UPDATE_USER_PASSWORD = 'update usuarios set user_pass = ?, user_reset_code = NULL, user_reset_code_expiration = NULL where id_user = ?';


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'dilanfantas@gmail.com', // Esto es mejor dejarlo en un archivo de configuración o en variables de entorno
        pass: 'jegc hedq jngv tyyg' // Esto es mejor dejarlo en un archivo de configuración o en variables de entorno
    }
});

export const ingresar = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Por favor, ingrese email y contraseña');
    }

    try {
        const [results] = await db.query<any[]>(SELECT_USER_BY_EMAIL, [email]);

        if (results.length === 0) {
            return res.status(400).send('Usuario no encontrado');
        }

        const user = results[0];
        
        const isMatch = await bcrypt.compare(password, user.user_pass);
        if (isMatch) {
            return res.status(200).send('Iniciaste sesión');
        } else {
            return res.status(400).send('Contraseña incorrecta');
        }
    } catch (error) {
        console.error('Error en la consulta:', error);
        return res.status(500).send('Error en el servidor');
    }
};

export const registrar = async (req: Request, res: Response) => {
    const { nombres, apellidos, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).send('Las contraseñas no coinciden');
    }

    if (password.length < 8) {
        return res.status(400).send('La contraseña debe tener al menos 8 caracteres');
    }

    try {
        const [result] = await db.query<any[]>(SELECT_USER_BY_EMAIL, [email]);

        if (result.length > 0) {
            return res.status(400).send('El usuario ya existe');
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const values = [nombres, apellidos, email, hashPassword];

        await db.query(INSERT_USER, values);

        return res.status(200).send('Usuario creado con éxito');
    } catch (error) {
        console.error('Error en la consulta:', error);
        return res.status(500).send('Error en el servidor');
    }
};

export const recuperar = async (req: Request, res: Response) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send('Por favor, ingrese un correo electrónico');
    }

    try {
        const [results] = await db.query<any[]>(SELECT_USER_BY_EMAIL, [email]);

        if (results.length === 0) {
            return res.status(400).send('Usuario no encontrado');
        }

        const user = results[0];
        const verificationCode = generateVerificationCode();
        const expirationDate = moment().add(1, 'hour').format('YYYY-MM-DD HH:mm:ss');

        await db.query(UPDATE_USER_RESET_CODE, [verificationCode, expirationDate, user.id_user]);

        const htmlContent = recoverPasswordTemplate(verificationCode);

        const mailOptions = {
            from: 'dilanfantas@gmail.com',  // Esto es mejor dejarlo en un archivo de configuración o en variables de entorno
            to: email,
            subject: 'Código de verificación para restablecer contraseña || Mr. Homero',
            html: htmlContent,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Código de verificación enviado por correo electrónico' });
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ message: 'Error al enviar el correo electrónico' });
    }
};

export const resetPassword = async (req: Request, res: Response) => {
    const { verificationCode, newPassword, confirmPassword } = req.body;

    if (newPassword !== confirmPassword) {
        return res.status(400).send('Las contraseñas no coinciden');
    }

    try {
        const fechaActual = moment().format('YYYY-MM-DD HH:mm:ss');
        const [results] = await db.query<any[]>(SELECT_USER_BY_RESET_CODE, [verificationCode, fechaActual]);

        if (results.length === 0) {
            return res.status(400).send('Código de verificación inválido, expirado o usuario no encontrado');
        }

        const user = results[0];
        const hashPassword = await bcrypt.hash(newPassword, 10);

        await db.query(UPDATE_USER_PASSWORD, [hashPassword, user.id_user]);

        res.status(200).send('Contraseña restablecida con éxito');
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).send('Error en el servidor');
    }
};