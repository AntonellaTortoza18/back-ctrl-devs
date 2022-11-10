// el primer paso de caulquier enrutador especifico es requerir el metodo Router() del modulo express
let router = require('express').Router()
// let controller = require("../controllers/user")
// esto nos trae todos los controladores, otra forma de traerlo es desestructurando.
//desestructuro el controlador de user para traerme los metodos que necesito traer.
let {create} = require("../controllers/user")
// route agrega alguna palabrita para que yo pueda acceder a ese metodo.
router.post("/",create)

module.exports = router;
