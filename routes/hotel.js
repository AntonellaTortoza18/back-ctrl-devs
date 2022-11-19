let router = require('express').Router()
let {create, update, read, getHotel, destroy} = require("../controllers/hotel")
const schema = require("../schemas/hotel")
const validator = require("../middlewares/validator")

router.post("/",validator(schema), create)
router.patch("/:id", update)
router.get("/",read)
router.get("/:id", getHotel)
router.delete("/:id", destroy)

module.exports = router;

