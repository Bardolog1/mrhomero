import 'reflect-metadata';
import { DataSource } from 'typeorm';
import Employee from '../models/Employee';
import Store from '../models/Store';
import Address from '../models/Address';
import Phone from '../models/Phone';
import Manager from '../models/Manager';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.AUTH_HOST,
    port: parseInt(process.env.AUTH_PORT as string, 10), // Ajuste para puerto
    username: process.env.AUTH_USER,
    password: process.env.AUTH_PASS,
    database: process.env.AUTH_DB,
    synchronize: true, // Cambia a false en producción
    logging: false,
    entities: [
        Employee,
        Store,
        Address,
        Phone,
        Manager
    ],
    ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: true
    } : undefined // Habilita SSL solo en producción
});