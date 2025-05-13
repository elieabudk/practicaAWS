import {fs} from 'fs';

export const getDatos = (req, res) => {
    const datos = JSON.parse(fs.readFileSync('datos.json', 'utf8'));
    res.json(datos);
}

