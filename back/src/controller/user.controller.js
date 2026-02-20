// src/controller/user.controller.js

const getUserById = (req, res) => {
    res.json({ message: "getUserById OK", id: req.params.id });
};

const getAllUsers = (req, res) => {
    res.json({ message: "getAllUsers OK" });
};

const createUser = (req, res) => {
    res.status(201).json({ message: "createUser OK", body: req.body });
};

const updateUser = (req, res) => {
    res.json({ message: "updateUser OK", id: req.params.id, body: req.body });
};

const deleteUser = (req, res) => {
    res.json({ message: "deleteUser OK", id: req.params.id });
};

module.exports = {
    getUserById,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
};
