const express = require("express")
const router = express.Router();
const bcrypt = require("bcryptjs")


require("../db/conn")
const User = require("../model/userSchema")
router.get('/', (req, res)=>{
    res.send("hello from server router")
})

router.post('/register', async(req, res)=>{
    const {fname, lname , email, password} = req.body;
   
    if(!fname|| !lname || !email|| !password){
        return res.status(422).json({err: "fill the form properly"})
    }
    User.findOne({email:email})
.then((userExit)=>{
    if(userExit){
        return res.status(422).json({err: "User Already Exist"})
    }

    const user = new User({fname, lname , email, password})
    user.save().then(()=>{
        res.status(201).json({message:"User Registered Successfully!"})
    }).catch((err)=>{
        res.status(500).json({error: "Failed to Register!"})

    }).catch(err => {console.log(err)})
})

    // res.json({message: req.body});
    // res.send("mera register page")
})

router.post('/sign-in', async (req,res)=>{
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error: "please fill the data"})
        }
        const userLogin = await User.findOne({email:email})
        // console.log(userLogin)
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)

            if(!isMatch){
                res.status(400).json({error: "Invalid Credentials"})
            }
            else{
                res.json({message: "User Signin Successfully!"})
            }
        }
        else{
            res.status(400).json({error: "Invalid Credentials!"})
        }
    }catch(err){
        console.log(err);
    }
})


module.exports = router