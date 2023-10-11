"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onIdTokenChanged } from "firebase/auth";
import { fbUser } from "@/models/user.model";
import { getById } from "@/hooks/authService";


const AuthContext = createContext(null as any);

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState(null as any);
    const [displayName, setDisplayName] = useState('');
    const [profileUrl, setProfileUrl] = useState('');
    const [userData, setUserData] = useState(null as any);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('useEffect outside')
        const unsubscribe = onIdTokenChanged(auth, async (currentUser) => {
            console.log('useeffect inside');
            setUser(currentUser);
            setDisplayName(currentUser?.displayName || '');
            setProfileUrl(currentUser?.photoURL || '');
            if (currentUser) {
                try {
                    console.log('useeffect fetching');
                    getById(currentUser.uid).then(data => setUserData(data));
                } catch (error) {
                    console.error("Error fetching user data from Firestore:", error);
                }
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);
    
    return (
        <AuthContext.Provider value={{user, displayName, profileUrl, userData, loading}}>{children}</AuthContext.Provider>
    )
}

export const UserAuth = () => {
    console.log('userauth');
    return useContext(AuthContext);
}

