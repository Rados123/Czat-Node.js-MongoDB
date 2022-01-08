const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    chatroom: {
        type: mongoose.Schema.Types.ObjectId,
        required: "Czat jest wymagany",
        ref: "Chatroom",
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        required: "Czat jest wymagany",
        ref: "User",
    },
    message: {
        type: String,
        required: "Treść jest wymagana"
    }
},
)

module.exports = mongoose.model("Message", messageSchema)