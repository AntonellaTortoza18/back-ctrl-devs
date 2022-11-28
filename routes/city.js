let router = require('express').Router()
let {create, read, readOne, update, destroy} = require("../controllers/city")
const schema = require("../schemas/city")
const validator = require("../middlewares/validator")
const passport = require('../config/passport')
const City = require("../models/City");
const isTheSameUser = require('../middlewares/isTheSameUser')


router.post("/",passport.authenticate("jwt", { session: false }), validator(schema),create)
router.get("/",read)
router.get("/:id",readOne)
router.put("/:id", passport.authenticate("jwt", { session: false }), isTheSameUser(City), update)
router.delete("/:id",passport.authenticate("jwt", { session: false }), isTheSameUser(City), destroy)
module.exports = router;
