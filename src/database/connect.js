// Connect express application with mongoDB database.

const { error } = require("console");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/PhoneBookData", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {

    console.log("Database connected successfully.");

}).catch((err) => {

    console.log("Not Connected" + error);

});