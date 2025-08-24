const userModel=require('../model/AuthenticateModel')
const userProfile=async(req,res)=>{
    const {username,password}=req.body
    try{
        await userModel.updateOne({username:'abhishek'},{$set:{username,password}})
        res.json({mess:'credential updated successfully',success:true})
    }
    catch(err){
        res.json({mess:err,success:false})
    }
}
const password=(req,res)=>{

}
module.exports={userProfile,password}