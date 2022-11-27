let router = require("express").Router();
let {
  create,
  update,
  read,
  getHotel,
  destroy,
} = require("../controllers/hotel");
const passport = require("../config/passport");
const isTheSameUser = require("../middlewares/isTheSameUser");
const schema = require("../schemas/hotel");
const validator = require("../middlewares/validator");
const Hotel = require("../models/Hotel");

router.get("/", read);
router.get("/:id", getHotel);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  isTheSameUser(Hotel),
  update
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  isTheSameUser(Hotel),
  destroy
);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validator(schema),
  create
);

module.exports = router;
