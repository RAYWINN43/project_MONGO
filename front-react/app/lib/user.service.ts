import User from '../types/user' ;
import UserFormData from '../types/userFormData';
const axios = require('axios') ;


const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api/user' ;

// Connexion axios
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
}) ;

// Services

function getUserById(id: string) {
    try {
        const response = api.get(`/${id}`) ;
        return response.data ;
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur :', error) ;
        throw error ;
    }
}

function createUser(userData: UserFormData) {
    try {
        const response = api.post('/', userData) ;
        return response.data ;
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur :', error) ;
        throw error ;
    }
}

function updateUser(id: string, userData: UserFormData) {
    try {
        const response = api.put(`/${id}`, userData) ;
        return response.data ;
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'utilisateur :', error) ;
        throw error ;
    }
}

function deleteUser(id: string) {
    try {
        const response = api.delete(`/${id}`) ;
        return response.data ;
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'utilisateur :', error) ;
        throw error ;
    }
}


export default {
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} ;