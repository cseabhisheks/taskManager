const mongoose = require('mongoose')
const link=process.env.Link
const db = async () => {
    try {
        await mongoose.connect(link)
        console.log('db is connected')
    } catch (err) {
        console.log("error is " + err)
    }
}

module.exports=db