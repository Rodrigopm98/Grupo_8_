const express=require("express");
const app= express();

/* carpeta public como estatica */
const path=require("path");
const publicpath= path.resolve(__dirname, "./public");
app.use(express.static(publicpath));

/* creacion del puerto 3030 */
app.listen(3030, ()=>console.log("puerto creado en: http://localhost:3030/"));
app.get("/", function(req,res){res.sendFile(path.resolve(__dirname, "./views/index.html"))});
app.get("/productCart", function(req,res){res.sendFile(path.resolve(__dirname, "./views/productCart.html"))});
app.get("/login", function(req,res){res.sendFile(path.resolve(__dirname, "./views/login.html"))});
app.get("/register", function(req,res){res.sendFile(path.resolve(__dirname, "./views/register.html"))});