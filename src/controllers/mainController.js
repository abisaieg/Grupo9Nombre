const controller = {
    // Root - Show all products|
index: (req, res) => {
    res.render('products/home.ejs');
},
login: (req, res) => {
    res.render('accounts/login.ejs');
},
register: (req, res) => {
    res.render('accounts/registrarse.ejs');
},
cart: (req, res) => {
    res.render('products/carrocompras.ejs');
},

profile: (req, res) => {
    res.render('accounts/perfil.ejs');
},

}
module.exports = controller;