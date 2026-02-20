'use client' ;

const useParams = require('next/navigation').useParams ;
import { useEffect, useState } from "react";

import User from '../types/user' ;
import UserService from "../lib/user.service";

const PageUsers = () => {

    const [users, setUsers] = useState<User[] | null>([]) ;
    const params = useParams() ;

    async function fetchAllUsers() {
        try {
            const response = await UserService.getAllUsers() ;
            setUsers(response) ;
        }
        catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs :', error) ;
        }
    }
    useEffect(() => {
        fetchAllUsers() ;
    }, []) ;

    return (
        <div>
            <h1>Utilisateurs</h1>
            {users && users.map((user) => (
                <div key={user._id}>
                    <p>Nom : {user.name}</p>
                    <p>Email : {user.email}</p>
                    <p>Date d'inscription : {user.createdAt}</p>
                </div>
            ))}
        </div>
    ) ;
}

export default PageUsers ;