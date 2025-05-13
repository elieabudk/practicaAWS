import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getDatos } from './controler.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas básicas
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API DE PRUEBA PARA AWS' });
});

app.get('/datos', getDatos);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
}); 