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
                    endpoint: "api/users/" + usuarios.id
                }
            })         
            let respuesta = {
                meta: {
                    status: 200,
                    count: usuarios.length,
                    url: "api/users"
                },
                data: newData
            }
            res.json(respuesta);
        })
    },   
    productList: (req, res) =>{
        db.Product.findAll()
        .then((productos) => {
            let newProduct = productos.map(productos => {
                return {
                    id: productos.id,
                    name: productos.name,
                    description: productos.description,
                    categoryId: productos.categoryId,
                    endpoint: "api/products/" + productos.id
                }
            })         

            let respuesta = [{
                meta:{
                    status: 200,
                    count: productos.length,
                    url: "api/products"
                },
                /* countByCategory:{ */
/* 
                }, */

                data: newProduct
            }]
            res.json(respuesta)
        }) 
    },

 };

module.exports = apiMainController;