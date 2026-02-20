'use client' ;

const useParams = require('next/navigation').useParams ;
import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
import user_styles from "./page.module.css" ;

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
        <main className={styles.page}>
            <h1>Utilisateurs</h1>
            <div>
                <table className={user_styles.table}>
                    <thead className={user_styles.tableHeader}>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date d'inscription</th>
                        </tr>
                    </thead>
                    {users && users.map((user) => (
                            <tbody key={user._id} className={user_styles.tableText}>
                                <tr>
                                    <th scope="col">{user.name}</th>
                                    <th scope="col">{user.email}</th>
                                    <th scope="col">{user.createdAt}</th>
                                </tr>
                            </tbody>
                    ))}
                </table>
            </div>
        </main>
    ) ;
}

export default PageUsers ;