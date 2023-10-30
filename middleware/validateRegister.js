const { body, validationResult } = require('express-validator');
const { hashSync, compareSync } = require('bcryptjs');

const data = require('./../database/database.json');
const fs = require('node:fs');
const path = require('node:path');
const pathData = path.join(__dirname, '.','..', 'database', 'database.json');

// Middleware
const validateRegister = [
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Las contraseñas no coinciden');
        }
        return true;
    }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const hashedPassword = hashSync(req.body.password, 10);

        // Crear cliente
        const newClient = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: hashedPassword,
        };

        //BD
        fs.readFile(pathData, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).json({ message: 'Error en el servidor' });
            }

            let clients = [];
            if (data) {
                clients = JSON.parse(data);
            }

            // Verificar si el cliente ya existe en la base de datos
            const existingClient = clients.find((client) => client.email === newClient.email);
            if (existingClient) {
                return res.status(400).json({ message: 'El cliente ya está registrado' });
            }

            // Agregar el nuevo cliente a la base de datos
            clients.push(newClient);

            // Guardar la base de datos actualizada
            fs.writeFile(pathData, JSON.stringify(clients, null, 2), (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Error en el servidor' });
                }
                return res.status(200).json({ message: 'Cliente registrado con éxito' });
            });
        });
    },
];

module.exports = validateRegister;
