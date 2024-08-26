import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: 'mrhomero.cp84e8ay06n5.us-east-2.rds.amazonaws.com',  // Esto es mejor dejarlo en un archivo de configuración o en variables de entorno
    user: 'homero', // Esto es mejor dejarlo en un archivo de configuración o en variables de entorno
    password: 'Awsmrhomero', // Esto es mejor dejarlo en un archivo de configuración o en variables de entorno
    database: 'mrhomero', // Esto es mejor dejarlo en un archivo de configuración o en variables de entorno
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
