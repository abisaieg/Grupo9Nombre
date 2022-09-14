const express = require("express")
const path = require("path")
const app = express()

//9pongo publica la carpeta public
app.use(express.static(path.join(__dirname, "/public")))


//poner en servidor localhost:3000
app.listen(3000,function(){
    console.log("servido andando")
})

//poner en la web http://localhost:3000/home
app.get("/home",(req,res)=>{
    res.sendFile((__dirname + "/views/home.html"))

})

//poner en la web http://localhost:3000/login
app.get("/login",(req,res)=>{
    res.sendFile((__dirname + "/views/login.html"))
 
})

//poner en la web http://localhost:3000/registrarse
app.get("/registrarse",(req,res)=>{
    res.sendFile((__dirname + "/views/registrarse.html"))
 
})

//poner en la web http://localhost:3000/descripcionproducto
app.get("/descripcionproducto",(req,res)=>{
    res.sendFile((__dirname + "/views/descripcionproducto.html"))

})
//poner en la web http://localhost:3000/carrocompras
app.get("/carrocompras",(req,res)=>{
    res.sendFile((__dirname + "/views/carrocompras.html"))

})

//rutas no asignadas   
app.get("*",(req,res)=>{//aca le paso la locaciona a donde redirecciono que es *
    res.send("rutas no estan asignadas")
})
