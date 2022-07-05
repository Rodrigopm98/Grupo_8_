const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs");
const {validationResult}= require("express-validator");


const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController ={
    register:  function(req,res){
        res.render("register") 
    },
    procesarFormulario: function(req, res){
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let newUser = {
                id: users[users.length - 1].id + 1,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                nombreDeUsuario: req.body.usuario,
                fechaNacimiento:req.body.fechaNacimiento,
                domicilio: req.body.domicilio,
                localidad: req.body.localidad,
                contraseña: bcrypt.hashSync(req.body.password, 10),
                imagen: req.file ? req.file.filename : "systemusers_94754.png",
                mail: req.body.mail
            }
            users.push(newUser);
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
            res.redirect("/");
        } else{
            res.render("register", {
                errors: errors.mapped(),
                oldData: req.body
            })
        }
        
    
    },
    login: function(req, res){
        res.render("login")
    },
    processLogin:function(req, res){
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); 
        let errors = validationResult(req);
        if(errors.isEmpty()){
            for (let i = 0; i < users.length; i++) {
                if(users[i].email == req.body.email){
                    if(bcrypt.compareSync(req.body.password, users[i].password)){
                        let usuarioALoguearse = users[i];
                        break;
                    }
                }
                
            }
            if(usuarioALoguearse == undefined){
                return res.render("login", {errors:[
                    {msg: "Credenciales invalidas"}
                ]})
            }
            req.session.usuarioLogueado = usuarioALoguearse;
            res.render("index");
    
        }else{
            
            return res.render("login", {
                errors: errors.mapped(),
                oldData: req.body
            }) 
        } 
       


    }
};

module.exports = usersController;
