// Imports
import UserRepository from "../repository/user.repository.js";

class UserService {
    
    static async getAllUsers() {
        return await UserRepository.findall() ;
    }

    static async getUserById(id) {
        return await UserRepository.findById(id) ;
    }

    static async getUserByName(name) {
        return await UserRepository.findByName(name) ;
    }

    static async getUserByEmail(email) {
        return await UserRepository.findByEmail(email) ;
    }

    static async createUser(userData) {
        return await UserRepository.create(userData) ;
    }

    static async updateUser(id, userData) {
        return await UserRepository.update(id, userData) ;
    }

    static async deleteUser(id) {
        return await UserRepository.delete(id) ;
    }

}

// Export
export default UserService ;