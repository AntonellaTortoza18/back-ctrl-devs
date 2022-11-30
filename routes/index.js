// requiero el metodo de entutamiento del modulo express. 
let router = require("express").Router();

// requiero las rutas de cada modelo a controlar.
let user = require("./user")
let city = require("./city")
let itinerary = require("./itinerary")
let hotel = require("./hotel")
let show = require("./show")


let comment = require ("./comment")

let reaction = require("./reaction")

// ubi de las rutas de curso.

// le obligo al enrutador principal que use la palabra user para poder controlar las rutas de user.
router.use('/api/auth', user)
router.use('/api/cities', city)
router.use("/api/reactions", reaction)
router.use('/api/itineraries', itinerary)
router.use('/api/hotels', hotel)
router.use('/api/shows', show)

router.use('/api/comments', comment)


module.exports = router;