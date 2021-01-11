const bcrypt=require('bcrypt')
const UserSchema=require('../database')

exports.getUsers=(req, res)=>{
    UserSchema.find()
    .then(result=>{
        console.log(res)
    })
    .catch(err=>console.log(err))
}

exports.getLogin=(req, res)=>{
    res.render({
        path:'/login',
        isAuthenticated:false
    })
}

const client_id = '9e2edbc49fcb49f78cce20df400672ca'; // Your client id
const client_secret = '7ddc179f4f974e22a0953745b3ce9519'; // Your secret

exports.postLogin=(req, res)=>{
    const email=req.body.email
    const password=req.body.password
    UserSchema.findOne({
        email:email
    })
    .then(user=>{
        if(!user){
            req.flash('error', 'Incorrect Gmail')
            return res.redirect('/login')
        }else{
            req.flash('error', 'Invalid Password')
        }
        bcrypt.compare(password, user.password)
        .then(doMatch=>{
            if(doMatch){
                req.session.isLoggedIn=true;
                req.session.user=user;
                return req.session.save(err=>{
                    console.log(err);
                    res.redirect('/')
                })
            }
            res.redirect('/login')
        })
        .catch(err=>{
            console.error(err)
        })
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.postLogout=(req, res, next)=>{
    req.session.destroy(err=>{
        console.log(err)
        res.redirect('/')
    })
}