
function usuarioData(sequelize, Datatypes){
    // nombre de la tabla, igual al nombre de la tabla en la base de datos
    let a = 'Usuario';
  
    // todos las columnas que va a tener esa tabla, debemos indicar el tipo de dato de cada tabla que 
    // debe tener, debemos ver que tipo de de dato de sequalize corresponde con el tipo de dato de lbd, ver la doc de
    // sequalize
    let c = {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      nombre: {type: Datatypes.STRING(30)},
      apellido: {type: Datatypes.STRING(30)},
      email: {type: Datatypes.STRING(30)},
      clave: {type: Datatypes.STRING(10)},
      admin: {type: Datatypes.BOOLEAN},
    }
    // esto lo dejamos asi por defecto, son congif de sequalize
    let cg = {camelCase: false, timestamps: false}; 
  
    // aca declaro una variable, con el metodo sequalize.define le paso las 3 variables y el resultdo lo guardo
    // en la variable peliculas 
    const usuario = sequelize.define(a,c,cg)

    // relaciones de la tabla
    usuario.associate = function (modelos){}
  
    // retorno la variable peliculas
    return usuario;
  }
  
  // aca exportamos todo
  module.exports = usuarioData;