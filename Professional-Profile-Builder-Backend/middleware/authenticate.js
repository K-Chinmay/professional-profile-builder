const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

const User = require('../models/userSchema');

const Authenticate = async (req,res,next)=>{
    try {
        const token = req.cookies.jwtoken;
        console.log(token);
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

        const rootUser = await User.findOne({
            _id:verifyToken._id,"tokens.token":token
        });

        if(!rootUser){
            throw new Error(`Could not find User`);
        }
            req.token =token;
            req.rootUser= rootUser;
            req.userId = rootUser._id;
            next();
        
    } catch (err) {
        res.status(401).send('Unautherized no token provided');
        console.log(err)
    }



}

module.exports = Authenticate