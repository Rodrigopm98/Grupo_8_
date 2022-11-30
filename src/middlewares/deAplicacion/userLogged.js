const db = require("../../database/models");
function userLogged(req, res, next) {
    res.locals.isLogged = false;
    if (req.session && req.session.usuarioLogueado) {
        res.locals.isLogged = true;
        res.locals.usuarioLogueado = req.session.usuarioLogueado
    }else{
        if(req.cookies.recordame != undefined && 
            req.session.usuarioLogueado == undefined){
            db.User.findAll()
            .then(user=> 
               { for (let i = 0; i < user.length; i++) {
                   if(user[i].dataValues.email == req.cookies.recordame){
                    let usuario = user[i].dataValues;
                    req.session.usuarioLogueado = usuario
                    res.locals.isLogged = true;
                    res.locals.usuarioLogueado = req.session.usuarioLogueado
                    break;
                   }
                    
                }}
                
                )} 
    }
    next();
};

module.exports = userLogged;




