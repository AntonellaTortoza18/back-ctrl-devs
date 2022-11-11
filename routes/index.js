// requiero el metodo de entutamiento del modulo express. 
let router = require("express").Router();

// requiero las rutas de cada modelo a controlar.
let user = require("./user")
let city = require("./city")
let itinerary = require("./itinerary")
let hotel = require("./hotel")
// ubi de las rutas de curso.

// le obligo al enrutador principal que use la palabra user para poder controlar las rutas de user.
router.use('/api/users', user)
router.use('/api/cities', city)

router.use('/api/itineraries', itinerary)

router.use('/api/hotels', hotel)

module.exports = router;