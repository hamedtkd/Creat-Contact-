const mongoose = require("mongoose");

const Contacs = mongoose.model('Contacs', {
    name: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },
     user: {
        type: String,
    },
    createdAt: {
        type: String,
        default: new Date()
    },
    jalaliDate: {
        type: String,
    },
    id:{
        type: String,
    },

});
module.exports = {
    Contacs
}