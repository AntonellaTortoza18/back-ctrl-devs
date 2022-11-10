// requiero el metodo de entutamiento del modulo express. 
let router = require("express").Router();

// requiero las rutas de cada modelo a controlar.
let user = require("./user")
// ubi de las rutas de curso.

// le obligo al enrutador principal que use la palabra user para poder controlar las rutas de user.
router.use('/api/users', user)

module.exports = router;