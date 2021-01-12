const express=require('express')
const router=express.Router()

const Users=require('../middleware/middleware')

router.get('/', Users.getUsers);

router.post('/signup', Users.PostUsers)

module.exports=router