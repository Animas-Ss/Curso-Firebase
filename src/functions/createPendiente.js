import { db } from "../firebase/credentials";
import { collection, addDoc} from 'firebase/firestore';

export default async function crearPendiente(data){
    try {
        const collectionRef = collection(db,'pendientes');
        const pendienteId = await addDoc(collectionRef, data);
        console.log( pendienteId);
    } catch (error) {
        console.log(error)
    }
}