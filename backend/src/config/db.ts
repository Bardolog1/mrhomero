import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: process.env.AUTH_HOST,
    user: process.env.AUTH_USER,
    password: process.env.AUTH_PASS,
    database:process.env.AUTH_DB, 
    waitForConnections: true, 
    connectionLimit: 10,
    queueLimit: 0,
    ssl: {
        rejectUnauthorized: true
    }
});


db.getConnection()
    .then((connection) => {
        console.log('Conectado a la base de datos');
        connection.release();
    })
    .catch((err) => {
        console.error('Error al conectar a la base de datos:', err);
    });

export { db };
