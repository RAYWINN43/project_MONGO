// Imports 
import UserService from '../service/user.service.js';
import ApiResponse from '../utils/apiResponse.js';

class UserController {

    static async getAllUsers(req, res, next) {
        try {
            const users = await UserService.getAllUsers() ;
            return ApiResponse.success(res, 'Users retrieved successfully', users) ;
        }
        catch (error) {
            console.error('Error retrieving users:', error) ;
            return ApiResponse.error(res, 'Failed to retrieve users', 500, error.message) ;
        }
    }

    static async getUserById(req, res, next) {
        try {
            const user = await UserService.getUserById(req.params.id) ;
            if (!user) {
                return ApiResponse.notFound(res, 'User not found') ;
            }
            return ApiResponse.success(res, 'User retrieved successfully', user) ;
        }
        catch (error) {
            console.error('Error retrieving user:', error) ;
            return ApiResponse.error(res, 'Failed to retrieve user', 500, error.message) ;
        }
    }

    static async getUserByName(req, res, next) {
        try {
            const user = await UserService.getUserByName(req.params.name) ;
            if (!user) {
                return ApiResponse.notFound(res, 'User not found') ;
            }
            return ApiResponse.success(res, 'User retrieved successfully', user) ;
        }
        catch (error) {
            console.error('Error retrieving user by name:', error) ;
            return ApiResponse.error(res, 'Failed to retrieve user', 500, error.message) ;
        }
    }

    static async getUserByEmail(req, res, next) {
        try {
            const user = await UserService.getUserByEmail(req.params.email) ;
            if (!user) {
                return ApiResponse.notFound(res, 'User not found') ;
            }
            return ApiResponse.success(res, 'User retrieved successfully', user) ;
        }
        catch (error) {
            console.error('Error retrieving user by email:', error) ;
            return ApiResponse.error(res, 'Failed to retrieve user', 500, error.message) ;
        }
    }

    static async createUser(req, res, next) {
        try {
            const newUser = await UserService.createUser(req.body) ;
            return ApiResponse.created(res, 'User created successfully', newUser) ;
        }
        catch (error) {
            console.error('Error creating user:', error) ;
            return ApiResponse.badRequest(res, 'Failed to create user', error.message) ;
        }
    }

    static async updateUser(req, res, next) {
        try {
            const updatedUser = await UserService.updateUser(req.params.id, req.body) ;
            if (!updatedUser) {
                return ApiResponse.notFound(res, 'User not found') ;
            }
            return ApiResponse.success(res, 'User updated successfully', updatedUser) ;
        }
        catch (error) {
            console.error('Error updating user:', error) ;
            return ApiResponse.badRequest(res, 'Failed to update user', error.message) ;
        }
    }

    static async deleteUser(req, res, next) {
        try {
            const result = await UserService.deleteUser(req.params.id) ;
            if (!result) {
                return ApiResponse.notFound(res, 'User not found') ;
            }
            return ApiResponse.success(res, 'User deleted successfully', null, 204) ;
        }
        catch (error) {
            console.error('Error deleting user:', error) ;
            return ApiResponse.error(res, 'Failed to delete user', 500, error.message) ;
        }
    }
}

// Export
export default UserController ;
