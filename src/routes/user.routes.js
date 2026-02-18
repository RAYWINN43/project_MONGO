// Imports
import express from 'express';
import UserController from '../controller/user.controler';

const user_router = express.Router() ;

// Routes
user_router.get('/:id', UserController.getUserById) ;
user_router.get('/', UserController.getAllUsers) ;
user_router.post('/', UserController.createUser) ;
user_router.put('/:id', UserController.updateUser) ;
user_router.delete('/:id', UserController.deleteUser) ;

// Export
export default user_router ;
