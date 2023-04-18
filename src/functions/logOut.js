import { auth } from "../firebase/credentials";
import { signOut } from 'firebase/auth';

export default async function logOut() {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error)
    }
}