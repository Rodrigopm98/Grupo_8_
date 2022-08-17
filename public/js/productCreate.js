window.addEventListener("load", function(){
    let formulario = document.querySelector("form.container");

    formulario.addEventListener("submit", function(e){
     

        let nombre = document.querySelector("input.name");
        let descripcion = document.querySelector("input.descripcion");
        let discount = document.querySelector("input.discount");
        let category = document.querySelector("input.category");
        let sport = document.querySelector("input.sport");
        let brand = document.querySelector("input.brand");
        let genre = document.querySelector("input.genre");
        let size = document.querySelector("input.size");
        let precio = document.querySelector("input.precio");

        if(nombre.value == ""){
            e.preventDefault();
            let errorName = document.querySelector("div.errorName");
            errorName.innerHTML = "<p>"+ "El campo de nombre debe estar completo" + "</p>"
        }
        if(descripcion.value == ""){
            e.preventDefault();
            let errorDescripcion = document.querySelector("div.errorDescripcion");
            errorDescripcion.innerHTML = "<p>"+ "El campo de descripcion del producto debe estar completo" + "</p>"

        }
        if(discount.value == ""){
            e.preventDefault();
            let errorDiscount = document.querySelector("div.errorDiscount");
            errorDiscount.innerHTML = "<p>"+ "Debes indicar si producto tiene descuento" + "</p>"

        }
        if(category.value == ""){
            e.preventDefault();
            let errorCategory = document.querySelector("div.errorCategory");
            errorCategory.innerHTML = "<p>"+ "Debes seleccionar la categoría" + "</p>"

        }
        if(sport.value == ""){
            errorSport
            e.preventDefault();
            let errorSport = document.querySelector("div.errorSport");
            errorSport.innerHTML = "<p>"+ "Debes seleccionar a qué deporte corresponde" + "</p>"
           
        }
        if(brand.value == ""){
            errorBrand
            e.preventDefault();
            let errorBrand = document.querySelector("div.errorBrand");
            errorBrand.innerHTML = "<p>"+ "Debes seleccionar la marca del producto" + "</p>"
           
        }
        if(genre.value == ""){
            errorGenre
            e.preventDefault();
            let errorGenre = document.querySelector("div.errorGenre");
            errorGenre.innerHTML = "<p>"+ "Debes seleccionar el género" + "</p>"
           
        }
        if(size.value == ""){
            errorSize
            e.preventDefault();
            let errorSize = document.querySelector("div.errorSize");
            errorSize.innerHTML = "<p>"+ "Debes seleccionar el talle del producto" + "</p>"
           
        }
        if(precio.value == ""){
            errorPrecio
            e.preventDefault();
            let errorPrecio = document.querySelector("div.errorPrecio");
            errorPrecio.innerHTML = "<p>"+ "Debes completar el precio del producto" + "</p>"
           
        }
    })

})