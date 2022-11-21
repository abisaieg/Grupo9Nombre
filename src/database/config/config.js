module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "preventodb",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": 3306 // esto se lo agregue yo porque el ejemplo de jero lo tenia 
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
