const path = require('path');
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
}
module.exports = mainController;