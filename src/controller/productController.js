const fs = require('fs');
const path = require('path');

/* const productsFilePath = path.join(__dirname, '../data/articulos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
 */
const db = require("../database/models");

const productController ={
    products: function(req, res){
        db.Product.findAll({
            include: [{association: "categoria"}]
        } )
        .then((p)=>{
            let products = p.filter((p=>p.deleted == 0))
            res.render("products", {products})})
       /*  res.render("products", {products}) */
    },
    detail: function(req,res){
        db.Product.findByPk(req.params.id)
        .then((producto)=>{
            res.render("productDetail", {producto})
        })
       /*  let id= req.params.id;
        let producto = products.find(p=>p.id==id);
        res.render("productDetail", {producto}) */
    },
    cart: function(req,res){res.render("productCart")},
    create: function(req,res){
        let size = db.Size.findAll();
        let sport = db.Sport.findAll();
        let brand = db.Brand.findAll();
        let category = db.Category.findAll();
        Promise.all([size, sport, brand, category])
        .then(([size, sport, brand, category])=>{
            res.render("productCreate", {fk:[size, sport, brand, category]})})
        
    },
    store: function(req, res){
       
      /*   const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */
        db.Product.create({
            name: req.body.name,
            description: req.body.descripcion,
            image: req.file.filename,
            discount: req.body.discount,
            price: req.body.precio,
            sportId: req.body.sport,
            userId: 1,
            brandId: req.body.brand,
            sizeId: req.body.size,
            genre:req.body.genre,
            categoryId: req.body.category,
            deleted : 0
        })
        .then(()=>{
          res.redirect("/products") })
        .catch((error)=>res.send(error));
        

        /* products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.render("products", {products}); */
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
        db.Product.update({
            deleted: 1
        },{
            where:{
               id: req.params.id
            }
        }),
        res.redirect("/products")

		/* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let finalProducts = products.filter(product => product.id != req.params.id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
		
		res.redirect("/products"); */
	}

}

module.exports=productController;