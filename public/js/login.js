window.addEventListener("load", function(){
    let formulario = document.querySelector(".form-container");

    formulario.addEventListener("submit", function(e){

       
        let email = document.querySelector("input.email");
        const emailValido = email => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
          }
       
        if(email.value == ""){
            e.preventDefault();
            let errorEmail = document.querySelector("div.errorEmail");
            errorEmail.innerHTML = "<p>"+ "Debes colocar tu email" + "</p>";
           
        }else if(!emailValido(email.value)){
            e.preventDefault();
            let errorEmail = document.querySelector("div.errorEmail");
            errorEmail.innerHTML = "<p>"+ "Formato de email inválido" + "</p>"

        }



    }) 
 })
