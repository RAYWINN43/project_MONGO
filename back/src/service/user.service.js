// Imports
const mongoose = require("mongoose") ;
const UserRepository = require("../repository/user.repository") ;

function makeError(message, statusCode = 400) {
    const err = new Error(message) ;
    err.statusCode = statusCode ;
    return err ;
}
    
function getAllUsers() {
    return UserRepository.findAllUsers() ;
}

function getUserById(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw makeError("ID invalide", 400) ;
    }

    const user = UserRepository.findUserById(id) ;
    if (!user) {
        throw new makeError("User not found", 404) ;
    }
    return user ;
}

function getUserByName(name) {
    const user = UserRepository.findUserByName(name) ;
    if (!user) {
        throw new makeError("User not found", 404) ;
    }
    return user ;
}

function getUserByEmail(email) {
    const user = UserRepository.findUserByEmail(email) ;
    if (!user) {
        throw new makeError("User not found", 404) ;
    }
    return user ;
}

function createUser(userData) {
    const user = UserRepository.createUser(userData) ;
    if (!user) {
        throw new makeError("Failed to create user", 500) ;
    }
    return user ;
}

function updateUser(id, userData) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw makeError("ID invalide", 400) ;
    }
    const user = UserRepository.updateUser(id, userData) ;
    if (!user) {
        throw new makeError("Failed to update user", 500) ;
    }
    return user ;
}

function deleteUser(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw makeError("ID invalide", 400) ;
    }
    return UserRepository.deleteUser(id) ;
}

// Export
module.exports = {
    getAllUsers,
    getUserById,
    getUserByName,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
} ;
