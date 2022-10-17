const path = require('path');
const fs = require('fs');

const pathProductDb = path.join(__dirname, '../data/eventos.json');
const eventos = JSON.parse(fs.readFileSync(pathProductDb, 'utf-8'));


const controller = {
	vistaListadoProd: (req, res) => {
		products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('products/home',{evento: eventos})
	},
	vistaCrearProd: (req, res) => {
		res.render('products/crear')
	},
	vistaDetalleProd: (req, res) => {
		res.render('products/descripcionproducto')
	},
	vistaEditarProd: (req, res) => {
		res.render('products/editar')
	},

	// accion guardar objeto nuevo en array
	accionGuardar: (req, res) => {
		idNuevo=0;

		for (let s of eventos){
			if (idNuevo<s.id){
				idNuevo=s.id;
			}
		}

		idNuevo++;

		// aca lo que hace el req.file.filename es traerme el nombre de la imagen
		// y guardarl oen una variable, cuando guardamos el producto es el nombre que guarda
		let nombreImagen = req.file.filename;


		let productoNuevo =  {
			id: idNuevo,
			nombre: req.body.name ,
			precio: req.body.price,
			// fecha: req.body.discount, ARMAR EL CAMPO DE FECHA
			categoria: req.body.category,
			descipcion: req.body.description,
			// aca guarda la variable asignada arriba
			imagen: nombreImagen
		};

		eventos.push(productoNuevo);

		fs.writeFileSync(pathProductDb, JSON.stringify(eventos,null,' '));

		res.redirect('/');
	},


	accionEditar: (req, res) => {},
	accionEliminar: (req, res) => {},
}
module.exports = controller;