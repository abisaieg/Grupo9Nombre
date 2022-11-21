// arrancar el proyecto
// 1-npm install
// 2-npm install multer (MULTER)
// 3 instalar npm install bcryptjs(HASHING, encriptar claves)
// 4 npm install express-validator (express validator)
// 5 npm install sequelize-cli 
// 6 npm install sequelize
// 7 npm install mysql2
// ARRANCAR CON npm start

// notas




// puntos a ver 

// 1 ver como elimianr el router de users ya que arme todo la funcionalidad de usuarios en el main router y main
// controller, ver de quitar el userRouter y userController sin que pinche las vistas de usuarios

// 2 ver como hacer para que la vista de perfil de usuario quede mostrando el perfil ingresado correctamente

// 3 en el archivo src/database/config/config.js agregue le puerto 3306 que por defaul no me lo creo
// ojo con esto, si pincha el codigo SACARLO

// 4 en las relaciones de los modelos, ver si la clave foranea que relaciona evento y usuario es admin_id como figura
// en la base o si debo poner Usuario_id (que seria el alias de la tabla de la clave foranea + id)

// 5 ver si en las relaciones en el tema de las foreign key toma o no mayusculas, ejemplo la relacion entre tabla
// evento y entrada que la clave foranea de vento es entrada_id




const express = require("express")
const path = require("path")
const app = express()
const methodOverride = require('method-override')

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views/'));

//Pongo publica la carpeta public
app.use(express.static(path.join(__dirname, "/public")))

//Trabajar con POST
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Trabajar con PUT y DELETE
app.use(methodOverride('_method'))

//Poner en servidor localhost:3000
app.listen(process.env.PORT || 3000,function(){
    console.log("Servidor subido a la escaloneta")
})

//RUTAS
const productRouter = require('./src/routes/productRouter'); // Rutas /products
const mainRouter = require('./src/routes/mainRouter')
const userRouter = require('./src/routes/userRouter')
const cartRouter = require('./src/routes/cartRouter');

app.use('/', mainRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter)
app.use('/user',userRouter)

app.use((req,res,next)=>{
    res.status(404).render('notfound')
})


module.exports = app;
