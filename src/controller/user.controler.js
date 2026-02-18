// Imports 
import UserService from '../service/user.service.js';

class UserController {

    static async getAllUsers(req, res, next) {
        try {
            const users = await UserService.getAllUsers() ;
            res.json(users) ;
        }
        catch (error) {
            next(error) ;
        }
    }

    static async getUserById(req, res, next) {
        try {
            const user = await UserService.getUserById(req.params.id) ;
            res.json(user) ;
        }
        catch (error) {
            next(error) ;
        }
    }

    static async getUserByName(req, res, next) {
        try {
            const user = await UserService.getUserByName(req.params.name) ;
            res.json(user) ;
        }
        catch (error) {
            next(error) ;
        }
    }

    static async getUserByEmail(req, res, next) {
        try {
            const user = await UserService.getUserByEmail(req.params.email) ;
            res.json(user) ;
        }
        catch (error) {
            next(error) ;
        }
    }

    static async createUser(req, res, next) {
        try {
            const newUser = await UserService.createUser(req.body) ;
            res.status(201).json(newUser) ;
        }
        catch (error) {
            next(error) ;
        }
    }

    static async updateUser(req, res, next) {
        try {
            const updatedUser = await UserService.updateUser(req.params.id, req.body) ;
            res.json(updatedUser) ;
        }
        catch (error) {
            next(error) ;
        }
    }

    static async deleteUser(req, res, next) {
        try {
            await UserService.deleteUser(req.params.id) ;
            res.status(204).send() ;
        }
        catch (error) {
            next(error) ;
        }
    }
}

// Export
export default UserController ;
