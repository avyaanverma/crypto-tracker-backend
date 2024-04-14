const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test,registerUser,loginUser,getProfile} = require('../controllers/authController')

//Middleware
router.use(
    cors({
        credentials:true,
        origin:'https://crypto-tracker-kappa-rust.vercel.app'
    })
)

router.get('/',test)
router.post("/register",registerUser);
router.post('/login',loginUser);
router.get('/profile',getProfile)

module.exports = router