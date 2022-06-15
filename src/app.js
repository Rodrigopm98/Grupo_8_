const express=require("express");
const app= express();

/* carpeta public como estatica */
const path=require("path");
const publicpath= path.resolve(__dirname, "../public");
app.use(express.static(publicpath));

/* configuracion del template engine */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

/* Tomar información del body */
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/* creacion del puerto 3030 */
app.listen(3030, ()=>console.log("puerto creado en: http://localhost:3030/"));

/* importando enrutadores */
const mainRouter = require("./routes/mainRoute");
const productRouter = require("./routes/productRoute");

app.use("/", mainRouter);
app.use("/products", productRouter);

