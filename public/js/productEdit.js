window.addEventListener("load", function(){
    let formulario = document.querySelector(".form-container");

    formulario.addEventListener("submit", function(e){

       
        let nombre = document.querySelector("input.name");
        let descripcion = document.querySelector(".textareaDescripcion");
        let imagenProducto = document.querySelector("input.imagenProducto"); 
        
        if(nombre.value == ""){
            e.preventDefault();
            let errorName = document.querySelector("div.errorName");
            errorName.innerHTML = "<p>"+ "El campo de nombre debe estar completo" + "</p>";
           
        }else if(!(nombre.value.length >= 5)){
            e.preventDefault();
            let errorName = document.querySelector("div.errorName");
            errorName.innerHTML = "<p>"+ "El campo de nombre debe tener al menos 5 caracteres" + "</p>"
        } 

        if(!(descripcion.value.length >= 20)){
            e.preventDefault();
            let errorDescripcion = document.querySelector("div.errorDescripcion");
            errorDescripcion.innerHTML = "<p>"+ "La descripcion debe contener al menos 20 caracteres" + "</p>"

        }

        if(imagenProducto.value == ""){
            e.preventDefault();
            let errorImage = document.querySelector("div.errorImage");
            errorImage.innerHTML = "<p>"+ "Debes colocar la imagen del producto" + "</p>"

        }else{
            let imagen = imagenProducto.value;
            let coincidencia1 = imagen.endsWith(".png");
            let coincidencia2 = imagen.endsWith(".jpg");
            let coincidencia3 = imagen.endsWith(".jpeg");
            let coincidencia4 = imagen.endsWith(".gif");
            if(!(coincidencia1 || coincidencia2 || coincidencia3 || coincidencia4)){
                e.preventDefault();
                let errorImage = document.querySelector("div.errorImage");
                errorImage.innerHTML = "<p>"+ "Solo se admiten extenciones .png .jpg .jpeg .gif" + "</p>"
            
            }
        }
    })



 })
