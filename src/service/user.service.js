// Imports
import UserRepository from "../repository/user.repository.js";

class UserService {
    
    static async getAllUsers() {
        return await UserRepository.findall() ;
    }

    static async getUserById(id) {
        const user = await UserRepository.findById(id) ;
        if (!user) {
            throw new Error('User not found') ;
        }
        return user ;
    }

    static async getUserByName(name) {
        const user = await UserRepository.findByName(name) ;
        if (!user) {
            throw new Error('User not found') ;
        }
        return user ;
    }

    static async getUserByEmail(email) {
        const user = await UserRepository.findByEmail(email) ;
        if (!user) {
            throw new Error('User not found') ;
        }
        return user ;
    }

    static async createUser(userData) {
        return await UserRepository.create(userData) ;
    }

    static async updateUser(id, userData) {
        const updatedUser = await UserRepository.update(id, userData) ;
        if (!updatedUser) {
            throw new Error('User not found') ;
        }
        return updatedUser ;
    }

    static async deleteUser(id) {
        const deletedUser = await UserRepository.delete(id) ;
        if (!deletedUser) {
            throw new Error('User not found') ;
        }
        return deletedUser ;
    }

}

// Export
export default UserService ;