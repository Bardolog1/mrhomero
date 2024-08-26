// Index.ts 
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const mysql = require('mysql');
const authRoutes = require('./routes/auth');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const secret = 'mysecretkey';

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Rutas
/* Ruta login */
app.use('/auth', authRoutes);

/* Hola mundo para probar */
app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});