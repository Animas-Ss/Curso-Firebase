import { db } from "../firebase/credentials";
import { collection, getDocs } from "firebase/firestore";

export default async function getAllPEndientes(){
    try {
        const collectionRef = collection(db, 'pendientes')
        const docsCifrados = await getDocs(collectionRef);
        const docs = docsCifrados.docs.map(d => d.data());
        console.log(docs)
        return docs
    } catch (error) {
        console.log(error)
    }

}

