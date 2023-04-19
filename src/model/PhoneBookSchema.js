// Defining User Schama.

const mongoose = require("mongoose");

const schema = mongoose.Schema;

const bookSchema = new schema({
    Name: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true,
        unique: true
    },

    Gender: String,
    Status: String,

    Date: {
        type: Date,
        default: Date.now
    }

});

// Create Collection...

const RegisteredUser = new mongoose.model("RegisteredUser", bookSchema);

module.exports = RegisteredUser;