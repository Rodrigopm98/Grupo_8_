const fs = require('fs');
const path = require('path');
const { Sequelize } = require('../database/models');
const { validationResult, cookie } = require("express-validator");

const db = require("../database/models");
const Op = Sequelize.Op;

const productController = {
    products: function (req, res) {
        db.Product.findAll({
            include: [{ association: "categoria" }]
        })
            .then((p) => {
                let products = p.filter((p => p.deleted == 0))
                res.render("products", { products })
            })

    },
    misProductos: function (req, res) {
        db.Product.findAll({
            include: [{ association: "categoria" },
            { association: "administrador" }
            ]
        })
            .then((p) => {
                let productos = p.filter((p => p.deleted == 0))
                return productos

            })
            .then((p) => {

                let products = [];
                for (let i = 0; i < p.length; i++) {
                    /* let producto=p[i].dataValues; */
                    let admin = p[i].dataValues.administrador.dataValues.email
                    if (req.session.usuarioLogueado.email == admin) {
                        products.push(p[i])
                    }

                }
                /* let products = p.filter(p=>{p.userId == }) */
                res.render("misProductos", { products })
            })

    },

    hombres: function (req, res) {
        db.Product.findAll({
            include: [{ association: "categoria" }]
        })
            .then((p) => {
                let hombres = p.filter((p => p.genre == "Hombre"))
                res.render("hombres", { hombres })
            })
    },

    mujeres: function (req, res) {
        db.Product.findAll({
            include: [{ association: "categoria" }]
        })
            .then((p) => {
                let mujeres = p.filter((p => p.genre == "Mujer"))
                res.render("mujeres", { mujeres })
            })
    },

    ninios: function (req, res) {
        db.Product.findAll({ raw: true }, {
            include: [{ association: "categoria" }]
        })
            .then((p) => {

                let products = p.filter((p => p.deleted == 0))
                return products

            })

            .then((p) => {

                let niño = p.filter((p => p.genre == "Niña"));
                let niña = p.filter((p => p.genre == "Niño"));
                let niños = niño.concat(niña)

                res.render("ninios", { niños })
            })
    },

    basquet: function (req, res) {
        db.Product.findAll({
            include: [{ association: "deporte" }]
        })

            .then((p) => {
                let productos = p.filter((p => p.deleted == 0))
                return productos
            })
            .then((p) => {
                /*console.log(p[0].dataValues.deporte.sport) */
                let basquet = p.filter((p => p.sportId == 1))
                console.log(basquet)

                res.render("basquet", { basquet })
            }
            )
    },

    futbol: function (req, res) {
        db.Product.findAll({
            include: [{ association: "deporte" }]
        })

            .then((p) => {
                let productos = p.filter((p => p.deleted == 0))
                return productos
            })
            .then((p) => {
                /*console.log(p[0].dataValues.deporte.sport) */
                let futbol = p.filter((p => p.sportId == 2))

                res.render("futbol", { futbol })
            }
            )
    },

    boxeo: function (req, res) {
        db.Product.findAll({
            include: [{ association: "deporte" }]
        })

            .then((p) => {
                let productos = p.filter((p => p.deleted == 0))
                return productos
            })
            .then((p) => {
                let boxeo = p.filter((p => p.sportId == 3))

                res.render("boxeo", { boxeo })
            }
            )
    },

    otro: function (req, res) {
        db.Product.findAll({
            include: [{ association: "deporte" }]
        })

            .then((p) => {
                let productos = p.filter((p => p.deleted == 0))
                return productos
            })
            .then((p) => {
                let otro = p.filter((p => p.sportId == 4))

                res.render("otro", { otro })
            }
            )
    },

    adidas: function (req, res) {
        db.Product.findAll({
            include: [{ association: "marca" }]
        })

            .then((p) => {
                let productos = p.filter((p => p.deleted == 0))
                return productos
            })
            .then((p) => {
                let adidas = p.filter((p => p.brandId == 1))

                res.render("adidas", { adidas })
            }
            )
    },

    nike: function (req, res) {
        db.Product.findAll({
            include: [{ association: "marca" }]
        })

            .then((p) => {
                let productos = p.filter((p => p.deleted == 0))
                return productos
            })
            .then((p) => {
                let nike = p.filter((p => p.brandId == 2))

                res.render("nike", { nike })
            }
            )
    },

    everlast: function (req, res) {
        db.Product.findAll({
            include: [{ association: "marca" }]
        })

            .then((p) => {
                let productos = p.filter((p => p.deleted == 0))
                return productos
            })
            .then((p) => {
                let everlast = p.filter((p => p.brandId == 3))

                res.render("everlast", { everlast })
            }
            )
    },

    umbro: function (req, res) {
        db.Product.findAll({
            include: [{ association: "marca" }]
        })

            .then((p) => {
                let productos = p.filter((p => p.deleted == 0))
                return productos
            })
            .then((p) => {
                let umbro = p.filter((p => p.brandId == 4))

                res.render("umbro", { umbro })
            }
            )
    },

    puma: function (req, res) {
        db.Product.findAll({
            include: [{ association: "marca" }]
        })

            .then((p) => {
                let productos = p.filter((p => p.deleted == 0))
                return productos
            })
            .then((p) => {
                let puma = p.filter((p => p.brandId == 5))

                res.render("puma", { puma })
            }
            )
    },

    otras: function (req, res) {
        db.Product.findAll({
            include: [{ association: "marca" }]
        })

            .then((p) => {
                let productos = p.filter((p => p.deleted == 0))
                return productos
            })
            .then((p) => {
                let otras = p.filter((p => p.brandId == 6))

                res.render("otrasMarcas", { otras })
            }
            )
    },

    deportes: function (req, res) {
        db.Product.findAll({
            include: [{ association: "categoria" }]
        })
            .then((p) => {
                let basquet = p.filter((p => p.Sport == "Basquet"));
                res.render("deportes", { basquet })
            })
    },

    search: function (req, res) {
        db.Product.findAll({
            include: [{ association: "categoria" }],
            where: {
                name: { [Op.like]: "%" + req.query.search + "%" }
            }
        })
            .then((p) => {
                let products = p.filter((p => p.deleted == 0))
                /* res.send(products) */
                res.render("products", { products })
            })
            .catch((e) => res.send(e))
    },

    detail: function (req, res) {
        db.Product.findByPk(req.params.id,{
            include: [{ association: "talle" },
        {association: "categoria"}]
        })
            .then((producto) => {
        
                res.render("productDetail", { producto })
            })
    },
    cart: function (req, res) { res.render("productCart") },
    create: function (req, res) {

        let size = db.Size.findAll();
        let sport = db.Sport.findAll();
        let brand = db.Brand.findAll();
        let category = db.Category.findAll();

        Promise.all([size, sport, brand, category])
            .then(([size, sport, brand, category]) => {
                res.render("productCreate", { fk: [size, sport, brand, category] })
            })

    },
    store: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Product.create({
                name: req.body.name,
                description: req.body.descripcion,
                image: req.file.filename,
                discount: req.body.discount,
                price: req.body.precio,
                sportId: req.body.sport,
                userId: req.session.usuarioLogueado.id,
                brandId: req.body.brand,
                sizeId: req.body.size,
                genre: req.body.genre,
                categoryId: req.body.category,
                deleted: 0
            })
                .then(() => {

                    res.redirect("/products")
                })
                .catch((error) => res.send(error));
        } else {

            let size = db.Size.findAll();
            let sport = db.Sport.findAll();
            let brand = db.Brand.findAll();
            let category = db.Category.findAll();
            Promise.all([size, sport, brand, category])
                .then(([size, sport, brand, category]) => {
                    res.render("productCreate", {
                        fk: [size, sport, brand, category],
                        errors: errors.mapped()
                    })
                })


        }

    },

    edit: function (req, res) {
        let producto = db.Product.findByPk(req.params.id)
        let size = db.Size.findAll();
        let sport = db.Sport.findAll();
        let brand = db.Brand.findAll();
        let category = db.Category.findAll();
        Promise.all([producto, size, sport, brand, category])
            .then(([producto, size, sport, brand, category]) => {
                res.render("productEdit", { producto: producto, size: size, sport: sport, brand: brand, category: category })
            })

    },
    update: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {

            db.Product.update({
                name: req.body.name,
                description: req.body.description,
                image: req.file.filename,
                discount: req.body.discount,
                price: req.body.price,
                sportId: req.body.sport,
                userId: req.session.usuarioLogueado.id,
                brandId: req.body.brand,
                sizeId: req.body.size,
                genre: req.body.genre,
                categoryId: req.body.category,
                deleted: 0
            }, {
                where: {
                    id: req.params.id
                }
            })
            res.redirect("/products/productDetail/" + req.params.id)
        } else {
            let producto = db.Product.findByPk(req.params.id)
            let size = db.Size.findAll();
            let sport = db.Sport.findAll();
            let brand = db.Brand.findAll();
            let category = db.Category.findAll();
            Promise.all([producto, size, sport, brand, category])
                .then(([producto, size, sport, brand, category]) => {
                    res.render("productEdit" + req.params.id, { producto: producto, size: size, sport: sport, brand: brand, category: category, errors: errors.mapped() })
                })

        }


    },
    destroy: (req, res) => {
        db.Product.update({
            deleted: 1
        }, {
            where: {
                id: req.params.id
            }
        }),
            res.redirect("/products")
    }

}

module.exports = productController;