const path = require('path');
const fs = require('fs');

// JSON USUARIOS, GUARDO EN UNA VARIABLE EL JSON DE USUARIOS PARA SUBIR USUARIOS
const pathUsertDb = path.join(__dirname, '../data/usuarios.json');
const usuarios = JSON.parse(fs.readFileSync(pathUsertDb, 'utf-8'));

// JSON USUARIOS, GUARDO EN UNA VARIABLE EL JSON DE PRODUCTOS PARA MOSTRAR LOS PRODUCTOS
const pathProductDb = path.join(__dirname, '../data/eventos.json');
const eventos = JSON.parse(fs.readFileSync(pathProductDb, 'utf-8'));



const controller = {
    // Root - Show all products|
index: (req, res) => {
    const eventos = JSON.parse(fs.readFileSync(pathProductDb, 'utf-8'));
    res.render('products/home',{evento: eventos})
},

vistaCrearUsuario: (req, res) => {
    res.render('accounts/registrarse')
},

accionGuardar: (req, res) => {
    idNuevo=0;

    for (let s of usuarios){
        if (idNuevo<s.id){
            idNuevo=s.id;
        }
    }

    idNuevo++;

    // aca lo que hace el req.file.filename es traerme el nombre de la imagen
    // y guardarl oen una variable, cuando guardamos el producto es el nombre que guarda
    let nombreImagen = req.file.filename;

    let usuarioNuevo =  {
        id: idNuevo,
        nombre: req.body.name ,
        apellido: req.body.surname,
        email: req.body.email, 
        direccion: req.body.adress,
        pais: req.body.country,
        contrasena:req.body.password,
        // aca guarda la variable asignada arriba
        imagen: nombreImagen
    };

    usuarios.push(usuarioNuevo);

    fs.writeFileSync(pathUsertDb, JSON.stringify(usuarios,null,' '));

    res.redirect('/');
},
}
module.exports = controller;