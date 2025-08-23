const {signUp,login} =require('../controller/AuthenticateController')

const express=require('express')

const routerAuthenticate=express.Router()

routerAuthenticate.use(express.json())

routerAuthenticate.post('/signUp',signUp)
routerAuthenticate.post('/login',login)

module.exports=routerAuthenticate