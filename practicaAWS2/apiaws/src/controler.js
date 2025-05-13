import fs from 'fs';

export const getDatos = (req, res) => {
    try {
        const datos = JSON.parse(fs.readFileSync('src/datos.json', 'utf8'));
        res.json(datos);
    } catch (error) {
        res.status(500).json({ error: 'Error al leer los datos' });
    }
}

