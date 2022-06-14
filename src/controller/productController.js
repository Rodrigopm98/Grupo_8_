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
    store: (req, res) => {
        /* res.send("Producto nuevo agregado"); */
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let newProduct = {
            id: products[products.length - 1].id + 1,
            username: req.body.name,
            descripcion: req.body.description,
            colores: req.body.color,
            precio: req.body.precio,
            imagen: "default-image.png",
            categoria: req.body.categoria,
        }
    
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    
        res.redirect("/products");
    },

    edit: function(req,res){
        let id= req.params.id;
        let producto = products.find(p=>p.id==id);
        res.render("productEdit", {producto})
    },
    destroy: function(req,res){
        
    }    
}

module.exports=productController;