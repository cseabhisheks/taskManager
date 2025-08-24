const {userProfile,password}=require('../controller/settingController')
const express=require('express')
const routeSetting=express.Router()
routeSetting.use(express.json())

routeSetting.post('/userProfile',userProfile)
routeSetting.post('/password',password)

module.exports=routeSetting