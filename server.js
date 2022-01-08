require('dotenv').config()
const { Mongoose } = require('mongoose')
const app = require('./app')

//const User = mongoose.model("User");

app.listen(8000, () =>{
    console.log("server listning on port 8000")
})

require('./models/User')
require('./models/Chatroom')
require('./models/Message')