
let mongoose = require('mongoose');
let Login = mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }    
})

module.exports=mongoose.model('userlogin',Login);