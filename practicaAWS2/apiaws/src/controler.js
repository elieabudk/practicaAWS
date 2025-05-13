import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getDatos = (req, res) => {
    try {
        const filePath = join(__dirname, 'datos.json');
        const datos = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        res.json(datos);
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).json({ error: 'Error al leer los datos' });
    }
}

