const { use } = require("../routes/router");
const RegisteredUser = require("../model/PhoneBookSchema");

// Create and save a new user
exports.create = (req, res) => {
    // validate request
    if(!req.body){
        res.status(400).send("Content can not be empty");
        return;
    }

    const user = new RegisteredUser({
        Name : req.body.name,
        Email : req.body.email,
        Gender : req.body.gender,
        Status : req.body.status
    })

    // Save user in the database
    user.save().then((data) => {
        // res.send(data)
    }).catch((err) => {
        res.status(500).send("Some error occurred while operation" + err);
    });

}

// retrive and return all users / tetrive and return a single users
exports.find = (req, res) => {
    RegisteredUser.find().then((result) => {
        res.send(user)
    }).catch((err) => {
        res.status(500).send("error occurred while retriving user info");
    });
}

// Upadte a new identified user by user id
exports.update = (req, res) => {
    if(req.body){
        return res.status(400).send("Data to update can not be empty");
    }

    const id = req.params.id;
    RegisteredUser.findByIdAndUpdate(id, req.body, {useFindAndModify : false})
    .then((data) => {
        if(data){
            res.status(404).send(`Cannot update user with ${id}. Maybe user not found`)
        }else{
            res.send(data);
        }
        
    }).catch((err) => {
        res.status(500).send("Error update user information");
    });
}

// Delete a user with specified user id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    RegisteredUser.findByIdAndDelete(id)
    .then(data => {
        if(data){
            res.status(404).send(`Cannot Delete with id ${id}. Maybe id is wrong`);
        }else{
            res.send("User Was Deleted Successfully");
        }
    }).catch(err => {
        res.status(500).send("Could not delete user with this id");
    });
}
