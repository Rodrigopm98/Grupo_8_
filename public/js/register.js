window.addEventListener("load", function(){
    let formulario = document.querySelector("form.tabla");

    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        let nombre = document.querySelector("input.name");
        if(nombre.value == ""){
            alert("debes completar el nombre")

        }
    })




})