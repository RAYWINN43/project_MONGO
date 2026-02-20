'use client' ;

const useParams = require('next/navigation').useParams ;
import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";

import User from '../../types/user' ;
import UserService from '../../lib/user.service' ;

const PageUser = () => {

    const [user, setUser] = useState<User | null>(null) ;
    const params = useParams() ;

    async function fetchUser() {
        try {
            const response = await UserService.getUserById(params.id) ;
            setUser(response) ;
        }
        catch (error) {
            console.error('Erreur lors de la récupération de l\'utilisateur :', error) ;
        }
    }
    useEffect(() => {
        fetchUser() ;
    }, []) ;

    return (
        <main className={styles.page}>
            <h1>Utilisateur</h1>
            <div className={styles.heroText}>
                <p>Nom : {user?.name}</p>
                <p>Email : {user?.email}</p>
                <p>Date d'inscription : {user?.createdAt}</p>
            </div>
        </main>
    ) ;
}

export default PageUser ;