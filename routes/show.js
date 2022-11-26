let router = require('express').Router()
const passport = require("../config/passport");
const isTheSameUser = require("../middlewares/isTheSameUser");
const Show = require("../models/Show");
const validator = require("../middlewares/validator");
const ShowSchema = require("../schemas/show");

let {read, create, update, destroy, readOne} = require("../controllers/show")

router.get("/",read)
/* router.get("/:id",readOne) ya
router.post("/",create) ya
router.patch("/:id", update) ya
router.delete("/:id", destroy) */


router.post("/", passport.authenticate("jwt", { session: false }), validator(ShowSchema), create);
router.patch("/:id", passport.authenticate("jwt", { session: false }),isTheSameUser(Show), update);
router.delete("/:id", passport.authenticate("jwt", { session: false }),isTheSameUser(Show), destroy);
router.get("/:id", readOne);
module.exports = router;


module.exports = router;