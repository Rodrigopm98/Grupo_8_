const usuarios = [
    {
     id: 1,
     nombre: "Lucas",
     apellido: "Cambon",
     contraseña: "123456789",
     mail: "lucas.cambon@digitalhouse.com"
    },
    {
     id: 2,
     nombre: "Luciana",
     apellido: "Hamade",
     contraseña: "2653135",
     mail: "luciana.b.hamade@gmail.com"
    } 
];

// encontrar usuario por email

let encontrarEmail = (email)=>{
    let coincidencias = usuarios.find(p=> p.mail == email)
    return coincidencias
}

console.log(encontrarEmail("luciana.b.hamade@gmail.com"))