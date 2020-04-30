const express = require("express");

const path = require("path");

const app = express();

require('events').EventEmitter.defaultMaxListeners = 15;

//settings

app.set("port",process.env.PORT || 4000);

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));



//rutas

app.use(require("./rutas/index.js"));

//arhivos estaticos
app.use(express.static("public"));

app.listen(app.get("port"),() =>{

console.log("servidor activo en el puerto",app.get("port"));

});

