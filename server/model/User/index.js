const mongoose = require("mongoose");

const Users = mongoose.model('users', {
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    createdAt: {
        type: String,
        default: new Date()
    },
    jalaliDate: {
        type: String,
    },
});
module.exports = {
    Users
}