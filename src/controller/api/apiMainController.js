const db = require("../../database/models");

const apiMainController = {
    userList: (req, res) => {
        db.User.findAll()
        .then((usuarios) => {
            let respuesta = {
                meta: {
                    status: 200,
                    count: usuarios.length,
                    url: "api/users"
                },
                data: {
                    usuarios
/*                     id: usuarios.id,
                    name: usuarios.firstName + " " + usuarios.lastName,
                    userName: usuarios.userName,
                    email: usuarios.email,
                    /* detail:  */ 
            }}
            res.json(respuesta);
        })
    }};

module.exports = apiMainController;