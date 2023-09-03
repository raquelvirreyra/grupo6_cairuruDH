const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto ' + port);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});