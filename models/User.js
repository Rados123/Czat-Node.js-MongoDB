const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        //minLength: 6,
        required: "Nazwa jest wymagana"
    },
    email: {
        type: String,
        //minLength: 6,
        //match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        required: "Email jest wymagany"
    },
    password: {
        type: String,
        //minLength: 8,
        required: "Hasło jest wymagane"
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)