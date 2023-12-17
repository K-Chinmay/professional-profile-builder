const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

const User = require('../models/userSchema');
const Admin = require('../models/adminSchema');

const GlobalAuth = async (req,res,next)=>{

    try {
        const token = req.cookies.jwtoken;
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
        try {
            const token = req.cookies.jwtoken;
            const verifyToken = jwt.verify(token,process.env.SECRET_KEY2);
    
            const rootAdmin = await Admin.findOne({
                _id:verifyToken._id,"tokens.token":token
            });
    
            if(!rootAdmin){
                throw new Error(`Could not find Admin`);
            }
                req.token =token;
                req.rootUser= rootAdmin;
                req.adminId = rootAdmin._id;
    
                next();
            
    
    
        } catch (err) {
            res.status(401).send('Unautherized no token provided');
            console.log(err)
        }
        // res.status(401).send('Unautherized no token provided');
        console.log(err)
    }



}

module.exports = GlobalAuth