const mongoose = require('mongoose');
const User = mongoose.model('User'); // Assuming you have a User model

// Controller method to get all users
const getAllUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        return res.status(200).json(users);
    });
};

// Controller method to create a new user
const createUser = (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        return res.status(201).json(user);
    });
};

// Controller method to update user information
const updateUser = (req, res) => {
    const { id } = req.params;
    User.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        return res.status(200).json(user);
    });
};

// Controller method to delete a user
const deleteUser = (req, res) => {
    const { id } = req.params;
    User.findByIdAndRemove(id, (err, user) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        return res.status(200).json({ message: 'User deleted successfully', deletedUser: user });
    });
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
};
