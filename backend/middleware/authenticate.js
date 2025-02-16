const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const Authenticate = async (req, res, next)=>{
    console.log("Auth")
    try{
        const token = req.cookies.jwtoken;
        // console.log("JWT: ",token)
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id : verifyToken._id, "tokens.token": token });
        if(!rootUser){
            throw new Error('user not found')
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();

    }catch(err){
        res.redirect('/sign-in');
        console.log(err);
    }
console.log("Auth")
}

module.exports = Authenticate;
