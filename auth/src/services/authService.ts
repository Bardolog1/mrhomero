import nodemailer from 'nodemailer';
import { MailOptions } from '../types/authTypes';

export async function sendMail(transporter: nodemailer.Transporter, mailOptions: MailOptions): Promise<void> {
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        throw new Error('Error al enviar el correo electrónico');
    }
}
