let productController ={
    detail: function(req,res){res.render("productDetail")},
    cart: function(req,res){res.render("productCart")},
    
}

module.exports=productController;