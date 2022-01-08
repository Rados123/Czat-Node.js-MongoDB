const mongoose = require("mongoose")
//const User = require('../models/User')
const User = mongoose.model("User")
const sha256 = require("js-sha256")
const jwt = require('jwt-then')

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    const user = new User({
        name, 
        email, 
        password: sha256(password + process.env.SALT)
    })
    
    await user.save()

    res.json({
        message:"Pomyślnie stworzono użytkownika [" + name + "]"
    })
}

exports.login = async (req, res) => {
    const user = await User.findOne({
        email: req.body,
        password: sha256(req.body.password + process.env.SALT)
    })
    if (!user) throw "błąd autoryzacji"
    const token = jwt.sign({id: user.id}, process.env.SECRET)
    
    res.json({
        message:"Zalogowano [" + name + "]", 
        token
    })


}
