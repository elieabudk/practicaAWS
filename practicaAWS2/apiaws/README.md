# API Express Básica

Esta es una API básica construida con Express.js que incluye ejemplos de rutas GET y POST.

## Instalación

1. Clona este repositorio
2. Instala las dependencias:
```bash
npm install
```

## Uso

Para iniciar el servidor en modo desarrollo:
```bash
npm run dev
```

Para iniciar el servidor en modo producción:
```bash
npm start
```

## Endpoints disponibles

- GET `/`: Mensaje de bienvenida
- GET `/api/usuarios/:id`: Obtener información de un usuario específico
- POST `/api/usuarios`: Crear un nuevo usuario

## Ejemplo de uso con POST

```bash
curl -X POST http://localhost:3000/api/usuarios \
-H "Content-Type: application/json" \
-d '{"nombre": "Juan", "email": "juan@ejemplo.com"}'
``` 