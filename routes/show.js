let router = require('express').Router()
let {read, create, update, destroy, getShow} = require("../controllers/show")
router.get("/",read)
router.post("/",create)
router.patch("/:id", update)
router.delete("/:id", destroy)
router.get("/:id", getShow)

module.exports = router;