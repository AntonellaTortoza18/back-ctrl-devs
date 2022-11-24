// el primer paso de caulquier enrutador especifico es requerir el metodo Router() del modulo express
let router = require('express').Router()
const schema = require("../schemas/user")
const validator = require("../middlewares/validator")
const accountExistsSignUp = require('../middlewares/accountExistsSignUp')
const accountExistsSignIn = require('../middlewares/accountExistsSignIn')
const accountHasBeenVerified = require('../middlewares/accountHasBeenVerified')
const mustSignIn = require('../middlewares/mustSignIn')
const { register,verified, } = require('../controllers/user')

// enterWithToken,leave,read,enter

router.post('/sign-up', validator(schema), accountExistsSignUp, register)
router.get('/verify/:code', verified)
// router.post('/sign-in',accountExistsSignIn, accountHasBeenVerified, enter)
// router.post('/token', passport.authenticate('jwt', { session:false }), mustSignIn, enterWithToken)
// router.put('/signout', passport.authenticate('jwt', { session:false }), leave)
// router.get('/users',read)


module.exports = router;
