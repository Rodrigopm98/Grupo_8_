const fs = require('fs');
const path = require('path');
const bcrypt = require("bcryptjs");
const { validationResult, cookie } = require("express-validator");
const { ResultWithContext } = require('express-validator/src/chain');
const session = require("express-session");

const fetch = require("node-fetch");
const db = require('../database/models');

//me traigo los productos para poder renderizar las vistas en el login
const productsFilePath = path.join(__dirname, '../data/articulos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
    register: function (req, res) {
        fetch("https://apis.datos.gob.ar/georef/api/provincias")
            .then(r => r.json())
            .then(p => {

                res.render("register", { p: p.provincias })
            })
            .catch(error => req.send(error))

    },
    procesarFormulario: function (req, res) {
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let encontrarEmail = users.find(p => p.mail == req.body.email);
            if (!encontrarEmail) {
                let newUser = {
                    id: users[users.length - 1].id + 1,
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    nombreDeUsuario: req.body.usuario,
                    fechaNacimiento: req.body.fechaNacimiento,
                    provincia: req.body.province,
                    localidad: req.body.localidad,
                    domicilio: req.body.domicilio,
                    contraseña: bcrypt.hashSync(req.body.password, 10),
                    imagen: req.file ? req.file.filename : "systemusers_94754.png",
                    mail: req.body.email
                }
                users.push(newUser);
                fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
                res.redirect("/");
            } else {
                res.render("register", {
                    msg: "Ya hay un usuario registrado con dicho email",
                    oldData: req.body
                })
            }
        } else {
            res.render("register", {
                errors: errors.mapped(),
                oldData: req.body
            })
        }


    },
    login: function (req, res) {
        res.render("login")
        
    },
    processLogin: function (req, res) {
        /* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */
        /* const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); */
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.User.findAll()
                .then(user => {
                    let busquedaEmail = user.find(u => u.email == req.body.email)
                    if (busquedaEmail) {
                        let comparacionPassword = bcrypt.compareSync(req.body.password, busquedaEmail.password)
                        if (comparacionPassword) {
                            delete busquedaEmail.password
                            req.session.usuarioLogueado = busquedaEmail
                            if(req.body.recordame != undefined){
                                res.cookie("recordame", busquedaEmail.email,
                                { maxAge: 600000 })
                            }
                            res.redirect("/products")
                        } else { res.render("login", { passwordIncorrecto: "contraseña incorrecta" }) }

                    } else { res.render("login", { emailInvalido: "El email ingresado no se encuentra registrado" }) }
                })

        } else {

            return res.render("login", {
                errors: errors.mapped(),
                oldData: req.body
            })
        }
        /* 
                if (req.body.recordame != undefined) {
                    res.cookie('recordame', 
                    usuarioALoguearse.email, { maxAge: 60000 })
        
                }
         */




    },
    perfil: function (req, res) {
        res.render("perfilUsuario")
    },
    cerrarSession: function (req, res) {
        req.session.destroy();
        res.redirect("/")
    }
};

module.exports = usersController;
