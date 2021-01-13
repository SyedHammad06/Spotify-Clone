const SignUp=require('../database/signup');
const Login=require('../database/login');
const bcrypt=require('bcryptjs');

exports.getUsers=(req, res)=>{
    SignUp.find()
    .then(result=>{
        console.log(result);
        res.json(result)
        console.log(result.length+' users signed in');
    })
    .catch(err=>console.log(err));
}

exports.postLogin=(req, res)=>{
    
}

exports.PostUsers=async (req, res)=>{
    try{
        const hashedPassword=await bcrypt.hash(req.body.password, 10);
        const user=new SignUp({
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword,
            year:req.body.year,
            month:req.body.month,
            day:req.body.day,
            gender:req.body.gender
        })
        const newUser=await user.save()
        console.log(newUser)
    }catch(err){
        res.status(500).send(err)
        console.log(err+'err');
    }
}

exports.findById=(req, res, next)=>{
    SignUp.findById(req.params.id)
    .then(user=>{
        console.log('working');
        if(user==null)return res.json({message:"cant find user"})
        res.user=user;
        next();
    })
    .catch(err=>console.log(err));
}