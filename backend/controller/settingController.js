const userModel = require('../model/AuthenticateModel')
const userProfile = async (req, res) => {
    const { username, password } = req.body
    try {
        await userModel.updateOne({ username: 'abhishek' }, { $set: { username, password } })
        res.json({ mess: 'credential updated successfully', success: true })
    }
    catch (err) {
        res.json({ mess: err, success: false })
    }
}
const password = async (req, res) => {
    const { currentPassword, newPassword } = req.body
    try {
       const updated= await userModel.findOneAndUpdate({username:'abhishek',password: currentPassword }, { $set: { password: newPassword } })
       if(updated){
        res.json({mess:'password is changed',success:true})
       }
       else{
        res.json({mess:'your current password is wrong',success:false})
       }
    }
    catch (err) {
        res.json({ mess: err })
    }
}
module.exports = { userProfile, password }