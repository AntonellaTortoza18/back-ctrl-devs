let router = require('express').Router()
let {read, create, update, destroy, readOne} = require("../controllers/itinerary")
router.get("/",read)
router.post("/",create)
router.put("/:id", update)
router.delete("/:id", destroy)
router.get("/:id",readOne)
module.exports = router;