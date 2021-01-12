const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const Schema=mongoose.Schema({
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
    },
    DOB:{
        year:{type:String},
        month:{type:String},
        day:{type:String}
    },
    gender:{
        type:String,
        required:true
    },
    signIn_date:{
        type:Date,
        default:Date.now()
    }
})
module.exports=mongoose.model('SignUp', Schema)