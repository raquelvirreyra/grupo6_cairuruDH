const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));

const mainController ={
    index: (req, res) => {
       res.render('index',{})
    },
    login: (req, res) => {
        res.render('login',{})
     },
    register: (req, res) => {
        res.render('register',{})
     },
    productDetail: (req, res) => {
        res.render('productDetail',{})
     },
    miCarrito: (req, res) => {
      res.render('miCarrito',{})
   },
    products: (req, res) => {
      res.render('products', {})
    },
}
module.exports = mainController;