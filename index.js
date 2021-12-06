const express = require('express')
const mongoose = require('mongoose')
const router = require('./router')
const cors = require('cors');

// use it before all route definitions

const PORT = 4000;
const ToDo_URL = `mongodb+srv://admin:admin@cluster0.ynbak.mongodb.net/todos`

const app = express()
app.use(cors({origin: 'http://localhost:63342'}));
app.use(express.json())
app.use('/api', router)

const startApp = async () => {
    try {
        await mongoose.connect(ToDo_URL, {useUnifiedTopology:true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()