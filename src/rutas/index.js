const express = require("express");

const rutas = express.Router();


rutas.get("/",(req,res)=>{
	//res.render("index.ejs") se puede usar render cuando la carpeta views esta en la raiz
	res.render("index.ejs",{title: "Inicio"});

	//console.log(path.join(__dirname,"views/index.ejs"));	
});

rutas.get("/about",(req,res)=>{

	res.render("nosotros",{title: "Nosotros"});
});

rutas.get("/contactos",(req,res)=>{

		res.render("contactos", {title: "contactos"});	
});

module.exports = rutas;