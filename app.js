const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./src/routes/mainRouter');

const port = 3000;

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(mainRouter);

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto ' + port);
});
