const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    createdAt: Date,
    phone: String,
    avartar: String,
    name: {
        last: String,
        first: String
    },
    username: String,
    password: String,
    fullname: String,
    id: Number,
    status: String
})
module.exports = UserSchema