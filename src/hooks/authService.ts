import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth } from "../../firebase/firebase";
import { db } from "../../firebase/firebase";
import { storage } from "../../firebase/firebase";
import * as fba from "firebase/auth"
import { User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from 'firebase/auth';
import { doc, getDoc, updateDoc } from "firebase/firestore";

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
    updateProfile(user, { ...props }).then(async () => {
        await user.getIdToken(true);
    });
}

export function deleteUser(user: User) {
    deleteUser(user);
}

export async function getById(id: string) {
    const docRef = doc(db, "Users", id);
    const docSnap = await getDoc(docRef);
    const data = await docSnap.data();
    return data;
}

export async function uploadProfilePicture(file: any, uid: string) {
    const supportedFiles = ['jpg', 'jpeg', 'png', 'gif'];
    if (supportedFiles.includes(file.name.split('.').pop())) {
        try {
            const storageRef = ref(storage, 'Images/Profile/' + uid + '/profilePic.' + file.name.split('.').pop());
            const snapshot = await uploadBytes(storageRef, file);
            const downloadUrl = await getDownloadURL(snapshot.ref);
            if (downloadUrl) {
                await updateDoc(doc(db, 'Users', uid), {photoUrl: downloadUrl});
                await updateUser({photoURL: downloadUrl});
                return downloadUrl;
            }
        } catch {
            return new Error('Something went wrong!');
        }
    } else {
        return new Error('File not supported! Please use jpg, jpeg, png or gif.');
    }
}