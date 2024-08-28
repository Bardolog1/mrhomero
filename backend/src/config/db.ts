import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: process.env.AUTH_HOST,
    user: process.env.AUTH_USER,
    password: process.env.AUTH_PASS,
    database: process.env.AUTH_DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: true
    } : undefined // Habilita SSL solo en producción
});

export { db };
