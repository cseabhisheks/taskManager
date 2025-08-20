const mongoose=require('mongoose')
const taskSchema=new mongoose.Schema({
    username:String,
    title:String,
    description:String,
    priority:String,
    date:Date,
    deadline:Date,
    status:String,
})
const taskModel=mongoose.model('taskModel',taskSchema)
module.exports=taskModel