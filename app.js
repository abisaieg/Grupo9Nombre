const express = require("express")
const path = require("path")
const app = express()

//Pongo publica la carpeta public
app.use(express.static(path.join(__dirname, "/public")))


//Poner en servidor localhost:3000
app.listen(3000,function(){
    console.log("Servidor subido a la escaloneta")
})

//Poner en la web http://localhost:3000/home
app.get("/home",(req,res)=>{
    res.sendFile((__dirname + "/views/home.html"))

})

//Poner en la web http://localhost:3000/login
app.get("/login",(req,res)=>{
    res.sendFile((__dirname + "/views/login.html"))
 
})

//Poner en la web http://localhost:3000/registrarse
app.get("/registrarse",(req,res)=>{
    res.sendFile((__dirname + "/views/registrarse.html"))
 
})

//Poner en la web http://localhost:3000/descripcionproducto
app.get("/descripcionproducto",(req,res)=>{
    res.sendFile((__dirname + "/views/descripcionproducto.html"))

})
//Poner en la web http://localhost:3000/carrocompras
app.get("/carrocompras",(req,res)=>{
    res.sendFile((__dirname + "/views/carrocompras.html"))

})

//Rutas no asignadas   
app.get("/",(req,res)=>{//aca va directo al home
    res.sendFile(__dirname + "/views/home.html")
})
