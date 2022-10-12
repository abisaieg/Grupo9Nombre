const controller = {
	// Root - Show all products|
evento: (req, res) => {
	res.render('products/descripcionproducto.ejs');
},

// esta creo que es lo mismo que detalle de producto
listar: (req, res) => {
	res.render('products/listar.ejs');
},

crear: (req, res) => {
	res.render('products/crear.ejs');
},

editar: (req, res) => {
	res.render('products/editar.ejs');
},

}
module.exports = controller;