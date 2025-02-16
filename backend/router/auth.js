const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const authenticate = require('../middleware/authenticate');
require("../db/conn");
const User = require("../model/userSchema");

router.get('/', authenticate, (req,res)=>{
    // console.log("hello from home");
    res.send(req.rootUser);
});

router.post('/register', async(req, res)=>{
    const {fname, lname , email, password} = req.body;
   
    if(!fname|| !lname || !email|| !password){
        return res.status(422).json({err: "fill the form properly"});
    }
    
    try {
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({err: "User Already Exist"});
        }

        const user = new User({fname, lname , email, password});
        await user.save();
        res.status(201).json({message:"User Registered Successfully!"});
    } catch(err) {
        res.status(500).json({error: "Failed to Register!"});
    }
});

router.post('/sign-in', async (req,res)=>{
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error: "please fill the data"});
        }
        
        const userLogin = await User.findOne({email:email});

        if(userLogin){           
            const isMatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();
            
            if(!isMatch){
                res.status(400).json({error: "Invalid Credentials"});
            } else{
                res.cookie("jwtoken", token, {
                    expires:new Date(Date.now() + 25892000000),
                    httpOnly:true 
                });
                res.json({message: "User Signin Successfully!", token});
            }
        } else{
            res.status(400).json({error: "Invalid Credentials!"});
        }
    } catch(err){
        console.log(err);
    }
});

router.get('/api/logout', async (req,res)=>{
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((token) => {
            return token.token !== req.token;
        });

        res.clearCookie('jwtoken', {path: '/'});
        await req.rootUser.save();
        res.send("User Logged out");
    } catch(err) {
        res.status(500).json({error: "Failed to Logout!"});
    }
});

module.exports = router;
