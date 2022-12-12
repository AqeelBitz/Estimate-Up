const mongoose = require("mongoose")
const DB = 'mongodb+srv://muhammad_aqeel:mallah1701094@cluster0.gagvshm.mongodb.net/mydb?retryWrites=true&w=majority'

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    
}).then(()=>{
    console.log("connection successful!")
}).catch((err)=>{console.log("connection failed!", err)})
