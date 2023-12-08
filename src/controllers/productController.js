const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../database/products.json');

const pruductController = {
   'list': (req, res) => { 
        fs.readFile(productsPath, 'utf8', (err, data) => { 
            if (err) { 
                console.log(err); 
                res.status(500).send('Error en el servidor'); 
            } 
            else { 
                const products = JSON.parse(data); 
                res.send(products); 
            } 
        });
    }
}
module.exports = productController;