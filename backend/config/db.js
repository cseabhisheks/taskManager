const mongoose = require('mongoose')
const LINK=process.env.DB_LINK
const db = async () => {
    try {
        await mongoose.connect(LINK)
        console.log('db is connected')
    } catch (err) {
        console.log("error is " + err)
    }
}

module.exports=db