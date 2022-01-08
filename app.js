const express = require('express')
const mongoose = require("mongoose");
const errorHandlers = require("./handlers/errorHandlers")


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes
app.use("/user", require('./routes/user'))

//baza danych
mongoose.connect("mongodb+srv://"+ process.env.DB_USER +":"+ process.env.DB_PASS +"@chat-app.x3tfc.mongodb.net/"+ process.env.DB_NAME +"?retryWrites=true&w=majority");
mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection ERROR: " + err.message)
})
mongoose.connection.once('open', () =>{
    console.log("MongoDB connected")
})

//errory
app.use(errorHandlers.notFound)
app.use(errorHandlers.mongoseErrors)
if (process.env.ENV === "DEVELOPMENT"){
    app.use(errorHandlers.developmentErrors)
} else {
    app.use(errorHandlers.productionErrors)
}

module.exports = app