let router = require('express').Router()
const schema = require("../schemas/itinerary")
const validator = require("../middlewares/validator")
let {read, create, update, destroy, readOne} = require("../controllers/itinerary")
const passport = require('../config/passport')
const Itinerary = require("../models/Itinerary");
const isTheSameUser = require('../middlewares/isTheSameUser')


router.get("/",read)
router.post("/", passport.authenticate("jwt", { session: false }), validator(schema), create);
router.put("/:id", passport.authenticate("jwt", { session: false }), isTheSameUser(Itinerary), update);
router.delete("/:id", passport.authenticate("jwt", { session: false }), isTheSameUser(Itinerary), destroy);
router.get("/:id",readOne)
module.exports = router;