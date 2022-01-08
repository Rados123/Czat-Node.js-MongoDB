const mongoose = require("mongoose")

const chatroomSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        minLength: 6,
        required: "Nazwa jest wymagana"
    }
},
)

module.exports = mongoose.model("Chatroom", chatroomSchema)