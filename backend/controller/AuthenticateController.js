const userModel = require('../model/AuthenticateModel')
const signUp = async (req, res) => {
    const {username,email,password}=req.body

  try{
    // checking whether username availabe or not
   const user= await userModel.findOne({username})
   if(!user){
   // creating new user
      await userModel.create({username,email,password})
    res.json({message:'login success',success:true})
   }
  else{
     res.json({message:"username already exist , please choose different",success:false})
  }
  }catch(err){
    res.json({message:err,success:false})
  }
    
}
const login = (req, res) => {
    res.send('login page is under construction')
}
module.exports = { signUp, login }