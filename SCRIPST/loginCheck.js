import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import{auth} from './firebaseConfig.js';


const loginLinks= document.querySelector('#loginNavBtn');
const logoutLinks= document.querySelector('#logOutNavBtn');

//console.log(loginLinks,logoutLinks)

// (onAuthStateChanged(auth, async user => loginCheck(user)))()

export const loginCheck = (user) =>{
    onAuthStateChanged(auth, async user => {
        if(user){
            logoutLinks.style.display = 'block'
            loginLinks.style.display = 'none'
        }else{
            logoutLinks.style.display = 'none'
            loginLinks.style.display = 'block'
        }
    }
    )
};