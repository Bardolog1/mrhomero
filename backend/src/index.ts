/*import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'reflect-metadata';
import { AppDataSource } from './config/data-source';
   

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

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});



AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
        // Aquí puedes empezar a trabajar con tus repositorios o realizar operaciones
    })
    .catch((err) => {
        console.error('Error during Data Source initialization:', err);
    });
*/  
import 'reflect-metadata';
import { AppDataSource } from './config/data-source'; // Ajusta la ruta según tu estructura de carpetas
import Employee from './models/Employee'; // Ajusta la ruta según tu estructura de carpetas
import { DocumentType } from './models/DocumentType'; // Asegúrate de que el path es correcto

async function main() {
    try {
        // Conectar a la base de datos
        await AppDataSource.initialize();
        console.log('Database connected successfully');

        // Obtener el repositorio del empleado desde el DataSource
        const employeeRepository = AppDataSource.getRepository(Employee);

        // Crear un nuevo empleado
        const newEmployee = new Employee(
            DocumentType.CC, // Usa un tipo de documento válido aquí
            '123456',
            'John',
            'Doe',
            30,
            'john.doe@example.com',
            'Manager',
            'HR',
            50000,
            new Date('1993-05-15')
        );

        // Guardar el nuevo empleado
        await employeeRepository.save(newEmployee);
        console.log('New employee saved successfully');

        // Buscar el empleado por nombre
        const employee = await employeeRepository.find({ where: { name: 'John' } });
        console.log('Employee found:', employee);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Cerrar la conexión a la base de datos
        await AppDataSource.destroy();
    }
}

main();

