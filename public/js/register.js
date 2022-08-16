window.addEventListener("load", function(){
    let formulario = document.querySelector("form.tabla");

    formulario.addEventListener("submit", function(e){
     

        let nombre = document.querySelector("input.name");
        let lastNamee = document.querySelector("input.lastName");
        let userName = document.querySelector("input.userName");
        let email = document.querySelector("input.email");
        let password = document.querySelector("input.password");

        
    
        if(nombre.value == ""){
            e.preventDefault();
            let errorName = document.querySelector("div.errorName");
            errorName.innerHTML = "<p>"+ "El campo de nombre debe estar completo" + "</p>"
        }
        if(lastNamee.value == ""){
            e.preventDefault();
            let errorLastName = document.querySelector("div.errorLastName");
            errorLastName.innerHTML = "<p>"+ "El campo de apellido debe estar completo" + "</p>"

        }
        if(userName.value == ""){
            e.preventDefault();
            let errorUserName = document.querySelector("div.errorUserName");
            errorUserName.innerHTML = "<p>"+ "Debes colocar un nombre de usuario" + "</p>"

        }
        if(email.value == ""){
            e.preventDefault();
            let errorEmail = document.querySelector("div.errorEmail");
            errorEmail.innerHTML = "<p>"+ "Debes colocar un email" + "</p>"

        }
        if(password.value == ""){
            errorPassword
            e.preventDefault();
            let errorPassword = document.querySelector("div.errorPassword");
            errorPassword.innerHTML = "<p>"+ "Debes colocar una contraseña" + "</p>"
           
        }
    })

})