const express = require('express')
const router = express.Router()
router.use(express.json())
const {add,fetch,remove,edit }=require('../controller/taskController.js')
router.post('/add',add)
router.get('/fetch',fetch)
router.patch('/edit',edit)
router.delete('/remove/:id',remove)
module.exports=router