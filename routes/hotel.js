let router = require('express').Router()
let {create, update, read, getHotel, destroy} = require("../controllers/hotel")
router.post("/",create)
router.patch("/:id", update)
router.get("/",read)
router.get("/:id", getHotel)
router.delete("/:id", destroy)

module.exports = router;