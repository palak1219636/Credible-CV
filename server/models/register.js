
let mongoose = require('mongoose');
let Register = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }    
})

module.exports=mongoose.model('userRegister', Register);