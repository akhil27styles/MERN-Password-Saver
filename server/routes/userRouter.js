const router=require('express').Router()
const userCtrl=require('../controllers/useCtrl')
const auth=require('../middleware/auth')
//Register User
router.post('/register',userCtrl.registerUser)
//login user
router.post('/login',userCtrl.loginUser)

//verify token
router.get('/verify',userCtrl.verifiedToken)
module.exports=router;