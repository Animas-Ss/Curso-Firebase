import { auth } from "../firebase/credentials";
import {GoogleAuthProvider, signInWithPopup, signInWithRedirect} from 'firebase/auth';

export default async function loginGoogle(){
    try {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    } catch (error) {
        console.log(error)
    }
}