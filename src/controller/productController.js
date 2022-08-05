const fs = require('fs');
const path = require('path');
const { Sequelize } = require('../database/models');

const db = require("../database/models");
const Op = Sequelize.Op;

const productController ={
    products: function(req, res){
        db.Product.findAll({
            include: [{association: "categoria"}]
        } )
        .then((p)=>{
            let products = p.filter((p=>p.deleted == 0))
            res.render("products", {products})})
  
    },
    search:function(req, res){
        db.Product.findAll({
            include: [{association: "categoria"}],
            where: {
                name:{[Op.like]: "%"+req.query.search+"%"} 
            }
        })
        .then((products)=>{ 
            /* res.send(products) */
            res.render("products", {products}) 
        })
        .catch((e)=> res.send(e))
    }, 

    detail: function(req,res){
        db.Product.findByPk(req.params.id)
        .then((producto)=>{
            res.render("productDetail", {producto})
        })
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
        
    },

    edit: function(req,res){
        let producto =  db.Product.findByPk(req.params.id)
        let size = db.Size.findAll();
        let sport = db.Sport.findAll();
        let brand = db.Brand.findAll();
        let category = db.Category.findAll();
        Promise.all([producto, size, sport, brand, category])
        .then(([producto, size, sport, brand, category])=>{
            res.render("productEdit", {producto:producto, size: size, sport:sport, brand: brand, category: category})})
        
    },
    update: function(req, res){
        db.Product.update({
            name: req.body.name,
            description: req.body.description,
            image: req.file.filename,
            discount: req.body.discount,
            price: req.body.price,
            sportId: req.body.sport,
            userId: 1,
            brandId: req.body.brand,
            sizeId: req.body.size,
            genre:req.body.genre,
            categoryId: req.body.category,
            deleted : 0
        },{
            where: {
                id: req.params.id
            }
        })
        res.redirect("/products/productDetail/" + req.params.id )
       
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
	}

}

module.exports=productController;