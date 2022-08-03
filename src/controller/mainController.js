const fs = require('fs');
const path = require('path');

/* const productsFilePath = path.join(__dirname, '../data/articulos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
 */
const db = require("../database/models");

let mainController = {
    index:  function(req,res){
        db.Product.findAll()
        .then((p)=>{
            let oferta = p.filter(p=> p.discount > 0)
            res.render("index", {oferta}) 
        })
      /*   let enOferta = products.filter(p=> p.oferta == true)
        res.render("index", {enOferta})  */
    },
    login: function(req,res){
        res.render("login") 
    },
    register:  function(req,res){
        res.render("register") 
    }

}

module.exports= mainController;