// Imports
const userModel = require("../model/user");


function findAllUsers() {
        return userModel.find() ;
}

function findUserById(id) {
    return userModel.findById(id) ;
}

function findUserByName(name) {
    return userModel.findOne({ name }) ;
}

function findUserByEmail(email) {
    return userModel.findOne({ email }) ;
}

function createUser(userData) {
    const user = new userModel(userData) ;
    return user.save() ;
}

function updateUser(id, userData) {
    return userModel.findByIdAndUpdate(id, userData, {
        new: true,
        runValidators: true,}) ;
}

function deleteUser(id) {
    return userModel.findByIdAndDelete(id) ;
}


// Export
module.exports = {
    findAllUsers,
    findUserById,
    findUserByName,
    findUserByEmail,
    createUser,
    updateUser,
    deleteUser
} ;