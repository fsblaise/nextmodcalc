import { auth } from "../../firebase/firebase";
import { db } from "../../firebase/firebase";
import * as fba from "firebase/auth"
import { User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";

export async function logIn(email: string, password: string) {
    return await signInWithEmailAndPassword(auth, email, password);
}

export async function logOut() {
    return await signOut(auth);
}

export async function createUser(email: string, password: string) {
    try {
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch {
        return 'error';
    }
    
}

export async function updateUser(props: any) {
    const user = auth.currentUser as User;
    updateProfile(user, {...props}).then(async () => {
        await user.getIdToken(true);
    });
}

export function deleteUser(user: User) {
    deleteUser(user);
}

export async function getById(id: string) {
    const docRef = doc(db, "Users", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}