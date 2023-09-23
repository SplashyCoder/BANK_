import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import{auth} from './firebaseConfig.js';

export async function protect (user) {
    onAuthStateChanged(auth, async user => {
        if(!user)location.replace('../index.html')
    })
}
