//  step one
const express = require("express");
const mongoose = require('mongoose');
const app = express()

const cors = require("cors");
require("dotenv").config()

// middleware
app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("tahir bhai")
});



const dbConnect = async () => {
    try {
        const database = await mongoose.connect(process.env.MONGO_URI)
        console.log("database_connected")

    } catch (error) {
        console.log(error)
    }
}

dbConnect().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port ${process.env.PORT}`)
    })
})