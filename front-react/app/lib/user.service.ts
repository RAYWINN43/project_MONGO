import User from '../types/user' ;
import UserFormData from '../types/userFormData';

import ResponseApi from '../types/responseApi' ;
import axios from 'axios' ;


const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api/user' ;

// Connexion axios
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
}) ;

// Services

const UserService = {

    async getAllUsers(): Promise<User[]> {
        try {
            const response = await api.get<ResponseApi<User[]>>('/') ;
            const payload = response.data as any ;
            const users = payload.data ?? payload ;
            return users as User[] ;
        } catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs :', error) ;
            throw error ;
        }
    },

    async getUserById(id: string): Promise<User> {
    try {
        const response = await api.get<ResponseApi<User>>(`/${id}`);
        const payload = response.data as any;
        const user = payload.data ?? payload;
        if (!user) {
            throw new Error("Utilisateur non trouvé");
        }
        return user as User;
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'utilisateur :', error);
            throw error;
        }
    },

    async createUser(userData: UserFormData) {
        try {
            const response = await api.post('/', userData) ;
            return response.data ;
        } catch (error) {
            console.error('Erreur lors de la création de l\'utilisateur :', error) ;
            throw error ;
        }
    },

    async updateUser(id: string, userData: UserFormData) {
        try {
            const response = await api.put(`/${id}`, userData) ;
            return response.data ;
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'utilisateur :', error) ;
            throw error ;
        }
    },

    async deleteUser(id: string) {
        try {
            const response = await api.delete(`/${id}`) ;
            return response.data ;
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'utilisateur :', error) ;
            throw error ;
        }
    }
} ;


export default UserService ;