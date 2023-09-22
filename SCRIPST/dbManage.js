import{db} from'./firebaseConfig.js'
import { collection, addDoc  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"



export const newData = async (title, content, url, colection = 'posts') =>{
    try {
        const docRef = await addDoc(collection(db, colection), {
            title,
            content,
            url
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}
