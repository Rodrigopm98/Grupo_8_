

const usersController ={
    register:  function(req,res){
        res.render("register") 
    },
    procesarFormulario: function(req, res){
        res.send("info enviada")
    }
};

module.exports = usersController;
