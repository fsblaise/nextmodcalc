"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onIdTokenChanged } from "firebase/auth";


const AuthContext = createContext(null as any);

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState(null as any);
    const [displayName, setDisplayName] = useState('');
    const [profileUrl, setProfileUrl] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onIdTokenChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setDisplayName(currentUser?.displayName || '');
            setProfileUrl(currentUser?.photoURL || '');
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);
    
    return (
        <AuthContext.Provider value={{user, displayName, profileUrl, loading}}>{children}</AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}

