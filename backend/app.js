const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require("express")
var cors = require('cors')
// const cookieParser = require('cookie-parser')

dotenv.config()
const app = express();

require('./db/conn')
app.use(cors({credentials: true, origin: true}))
app.use(express.json()); // tells the system that you want json to be used.
app.use(express.urlencoded({ extended: true }));

app.use(require('./router/auth'))

// const User = require('./model/userSchema')
// app.get('/', (req, res)=>{
//     // res.cookie("jwtoken", 'aqeel')
//     res.send("hello from server")
// })
app.listen(5000,()=>{
    console.log("listening at port 5000");
})