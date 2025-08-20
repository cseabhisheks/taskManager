const mongoose = require('mongoose')
const localLink='mongodb://localhost:27017'
const onlineLink='mongodb+srv://devMagnets:abhiyumi2030@devmagnets.aaytzzv.mongodb.net/taskManager?retryWrites=true&w=majority&appName=devMagnets'
const db = async () => {
    try {
        await mongoose.connect(localLink)
        console.log('db is connected')
    } catch (err) {
        console.log("error is " + err)
    }
}

module.exports=db