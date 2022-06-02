let productController ={
    detail: function(req,res){res.render("productDetail")},
    cart: function(req,res){res.render("productCart")},
    create: function(req,res){res.render("productCreate")},
    edit: function(req,res){res.render("productEdit")},    
}

module.exports=productController;