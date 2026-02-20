// Imports
const UserRepository = require("../repository/user.repository") ;


    
function getAllUsers() {
    return UserRepository.findAllUsers() ;
}

function getUserById(id) {
    return UserRepository.findUserById(id) ;
}

function getUserByName(name) {
    return UserRepository.findUserByName(name) ;
}

function getUserByEmail(email) {
    return UserRepository.findUserByEmail(email) ;
}

function createUser(userData) {
    return UserRepository.createUser(userData) ;
}

function updateUser(id, userData) {
    return UserRepository.updateUser(id, userData) ;
}

function deleteUser(id) {
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
