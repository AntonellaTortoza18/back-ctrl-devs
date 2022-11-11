let router = require('express').Router()
let {create, update, read, getHotel} = require("../controllers/hotel")
router.post("/",create)
router.patch("/:id", update)
router.get("/",read)
router.get("/:id", getHotel)

module.exports = router;