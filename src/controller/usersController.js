const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs");

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController ={
    register:  function(req,res){
        res.render("register") 
    },
    procesarFormulario: function(req, res){
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        let newUser = {
            id: users[users.length - 1].id + 1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            nombreDeUsuario: req.body.usuario,
            fechaNacimiento:req.body.fechaNacimiento,
            domicilio: req.body.domicilio,
            localidad: req.body.localidad,
            contraseña: bcrypt.hashSync(req.body.password, 10),
            imagen: req.file.filename,
            mail: req.body.mail
        }
    
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
        res.redirect("/");
    
    }
};

module.exports = usersController;
