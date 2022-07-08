function userLogged(req, res, next)
{if(req.session.usuarioLogueado){
    res.locals.isLogged = true;
    res.locals.usuarioLogueado = req.session.usuarioLogueado
}   next();
}; 

module.exports = userLogged;



