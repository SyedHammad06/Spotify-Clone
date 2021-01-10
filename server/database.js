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
    userDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('UserSchema', Schema)