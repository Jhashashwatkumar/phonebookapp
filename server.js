const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const bodyParser = require("body-parser");
require("./src/database/connect");
const RegisteredUser = require("./src/model/PhoneBookSchema");

const port = process.env.PORT || 5000;


// For Public Folder
const public_path = path.join(__dirname, "../public");


// parser request to body parser
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

// set view engine
app.use(express.static(public_path));
app.set("view engine", "ejs");

app.use('/css', express.static(path.resolve(__dirname, "public/css")))
app.use('/js', express.static(path.resolve(__dirname, "public/js")))


// require routers
app.use('/', require('./src/routes/router'));


// Backup code
app.get("/", (req, res) => {
    res.send("Server Error !");
});


app.listen(port, () => {
    console.log(`Server is running on port no ${port}`);
});