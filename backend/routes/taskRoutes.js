const express = require('express')
const routerTask = express.Router()
routerTask.use(express.json())
const {add,fetch,remove,edit }=require('../controller/taskController.js')
routerTask.post('/add',add)
routerTask.get('/fetch',fetch)
routerTask.patch('/edit',edit)
routerTask.delete('/remove/:id',remove)
module.exports=routerTask