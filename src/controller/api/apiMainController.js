const path= require("path")
const db = require("../../database/models");

const apiMainController = {
    userList: (req, res) => {
        db.User.findAll()
            .then((usuarios) => {
                let newData = usuarios.map(usuarios => {
                    return {
                        id: usuarios.id,
                        name: usuarios.firstName,
                        last_name: usuarios.last_name,
                        email: usuarios.email,
                        detailUrl: "http://localhost:3030/api/users/" + usuarios.id
                    }
                })
                let respuesta = {
                    meta: {
                        status: 200,
                        count: usuarios.length,
                    },
                    users: newData
                }
                res.json(respuesta);
            })
    },
    userDetail:(req, res)=>{
        db.User.findByPk(req.params.id)
        .then((usuario)=>{
            let user = usuario.dataValues;
            delete user.password;
            delete user.address;
            delete user.role;
            delete user.city;
            delete user.deleted;

            res.json(usuario)
        })
        

    },
    productList: (req, res) => {
        db.Product.findAll({
            include: [{
                association: "categoria"
            }, {
                association: "talle"
            }, {
                association: "marca"
            }, {
                association: "deporte"
            }, {
                association: "administrador"
            }]
        })
            .then((products) => {
                let productosDisponibles = products.filter(p => p.deleted == 0);
                let productos = [];
                for (let i = 0; i < productosDisponibles.length; i++) {
                    let producto = productosDisponibles[i].dataValues;
                    producto.url = "http://localhost:3030/api/products/" + producto.id;
                    let dbBrand;
                    if (producto.marca != null) {
                        dbBrand = producto.marca.dataValues.brand;
                    }
                    let dbCategory = producto.categoria.dataValues.category;
                    let dbSize = producto.talle.dataValues.size;
                    let dbSport = producto.deporte.dataValues.sport;
                    let dbUser = producto.administrador.dataValues.userName;

                    producto.dbRelations = [dbCategory, dbSize, dbSport]
                    if (dbBrand) {
                        producto.dbRelations.push(dbBrand)
                    }
                    producto.dbRelations.push({ admin: dbUser })

                    delete producto.deleted;
                    delete producto.categoryId;
                    delete producto.brandId;
                    delete producto.sizeId;
                    delete producto.sportId;
                    delete producto.userId;
                    delete producto.categoria;
                    delete producto.talle;
                    delete producto.marca;
                    delete producto.deporte;
                    delete producto.administrador;
                    productos.push(producto);
                }
                return productos
            })
            .then((productos) => {
                let camisetas = 0;
                let botines = 0;
                let guantes = 0;
                let otras = 0;
                for (let i = 0; i < productos.length; i++) {
                    let productoCategoria = productos[i].dbRelations[0];
                    switch (productoCategoria) {
                        case "Camisetas":
                            camisetas += 1
                            break;
                        case "Botines":
                            botines += 1
                            break;
                        case "Guantes":
                            guantes += 1
                            break;
                        case "Otras":
                            otras += 1
                            break;
                        default:
                            otras += 1
                            break;
                    }

                }
                res.json({
                    count: productos.length,
                    countByCategory: { camisetas, botines, guantes, otras },
                    products: productos
                })

            })

    },
    productDetail: (req, res) => {
        db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [{ association: "categoria" },
            { association: "talle" },
            {
                association: "marca"
            }, {
                association: "deporte"
            }, {
                association: "administrador"
            }]
        })
            .then((producto) => {
                let product = producto.dataValues;
                let dbCategory = product.categoria.dataValues.category;
                let dbSize = product.talle.dataValues.size;
                let dbSport = product.deporte.dataValues.sport
                let dbUser = product.administrador.dataValues.userName;
                
                product.dbRelations = [dbCategory, dbSize, dbSport]
                
                if(product.marca){
                   let dbBrand = product.marca.dataValues.brand;
                   product.dbRelations.push(dbBrand)
                }
                product.dbRelations.push({admin:dbUser})
                
                
                delete product.marca;
                delete product.categoria;
                delete product.talle;
                delete product.administrador;
                delete product.deporte;
                

                let ruta = path.join(__dirname, "../../public/images/");
                let imagen = ruta
                console.log(ruta)
                product.url="http://localhost:3030/api/products/"+ product.id +"/"+ product.image;
               /*  "http://localhost:3030/api/products/"+ product.id +"/"+ product.image; */
                /* ruta+product.image; */ 
                /*  let product = producto.dataValues;
                /*  product.url = "C:\Users\Peralta\OneDrive\Escritorio\DHC13\COPIA PROYECTO GLORIOSOS 29,8,22\Grupo_8_GloriososClub\public\images" + product.image; */
                /* "http://localhost:3030/api/products/"+ product.id +"/"+ product.image; */

                res.json({ product })



            })
    }
};

module.exports = apiMainController;