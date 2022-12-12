const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require("express")
const app = express();

require('./db/conn')
app.use(express.json())
app.use(require('./router/auth'))
// const User = require('./model/userSchema')
app.get('/', (req, res)=>{
    res.send("hello from server")
})
app.listen(5000,()=>{
    console.log("listening at port 5000");
})