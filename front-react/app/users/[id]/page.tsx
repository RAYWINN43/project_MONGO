'use client' ;

const useParams = require('next/navigation').useParams ;
import { useEffect, useState } from "react";

import User from '../../types/user' ;
import UserService from '../../lib/user.service' ;

const PageUser = () => {

    const [user, setUser] = useState<User | null>(null) ;
    const params = useParams() ;

    async function fetchUser() {
        try {
            const response = await UserService.getUserById(params.id) ;
            setUser(response) ; // En cours d'implémentation */
            /* const response = await fetch(`http://localhost:3000/api/user/${params.id}`) ;
            const data = await response.json() ;
            setUser(data) ; //*/
        }
        catch (error) {
            console.error('Erreur lors de la récupération de l\'utilisateur :', error) ;
        }
    }
    useEffect(() => {
        fetchUser() ;
    }, []) ;

    return (
        <div>
            <h1>Utilisateur</h1>
            <p>Nom : {user?.name}</p>
            <p>Email : {user?.email}</p>
            <p>Date d'inscription : {user?.createdAt}</p>
        </div>
    ) ;
}

export default PageUser ;