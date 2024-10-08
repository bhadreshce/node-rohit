const mongoose = require('mongoose');

const studedenSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },

    age: {
        type: Number,
        required: true,
        min: 5,
        max: 150
    },
    pass: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 20,
        validate: {
            validator: function (v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: 'Password must contain at least 8 characters, including uppercase letters, lowercase letters, numbers, and special characters.'
        },


    }




})


module.exports = new mongoose.model('Student', studedenSchema);