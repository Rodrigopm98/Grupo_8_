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
};

module.exports = apiMainController;