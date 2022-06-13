const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/articulos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController ={
    products: function(req, res){
        res.render("products", {products})
    },
    detail: function(req,res){
        let id= req.params.id;
        let producto = products.find(p=>p.id==id);
        res.render("productDetail", {producto})
    },
    cart: function(req,res){res.render("productCart")},
    create: function(req,res){res.render("productCreate")},
    edit: function(req,res){
        let id= req.params.id;
        let producto = products.find(p=>p.id==id);
        res.render("productEdit", {producto})
    },    
}

module.exports=productController;