const cors=require('cors')
const db = require('./config/db.js')
db()
const router=require('./routes/taskRoutes.js')
const express = require('express')
const app = express()
const PORT = 2030// need to put in backend
app.use(cors())
app.use('/task',router)

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})