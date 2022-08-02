const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/articulos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require("../database/models");

const productController ={
    products: function(req, res){
        /* db.sports.findAll()
        .then(r=> res.JSON(r)) */
        res.render("products", {products})
    },
    detail: function(req,res){
        let id= req.params.id;
        let producto = products.find(p=>p.id==id);
        res.render("productDetail", {producto})
    },
    cart: function(req,res){res.render("productCart")},
    create: function(req,res){res.render("productCreate")},
    store: function(req, res){
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let newProduct = {
            id: products[products.length - 1].id + 1,
            precio: req.body.precio,
            nombre: req.body.name,
            descripcion: req.body.descripcion,
            imagen: req.file.filename,
            categoria: req.body.categoria,
            oferta: false
        }
        
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.render("products", {products});
    },

    edit: function(req,res){
        let id= req.params.id;
        let producto = products.find(p=>p.id==id);
        res.render("productEdit", {producto});

    },
    update: function(req, res){
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let id= req.params.id;
        let producto = products.find(p=>p.id==id);
        let editedProduct={
            id: id,
            precio: req.body.precio,
            nombre: req.body.name,
            descripcion:  req.body.descripcion ,
            imagen: producto.imagen,
            categoria: req.body.categoria,
            oferta: producto.oferta
        }
        let indice= products.findIndex( product => product.id == req.params.id );
        products[indice]= editedProduct; 
        

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    
        res.redirect("/products");

         

    },
    destroy : (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let finalProducts = products.filter(product => product.id != req.params.id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
		
		res.redirect("/products");
	}

}

module.exports=productController;