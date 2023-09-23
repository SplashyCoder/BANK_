import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import{auth} from './firebaseConfig.js';


const loginLinks = document.querySelector('#loginNavBtn');
const logoutLinks = document.querySelectorAll('#logOutNavBtn');

//console.log(loginLinks,logoutLinks)

// (onAuthStateChanged(auth, async user => loginCheck(user)))()

export const loginCheck = (user) =>{
    onAuthStateChanged(auth, async user => {
        if(user){
            logoutLinks.forEach(link => link.style.display = 'block') 
            loginLinks.style.display = 'none'
        }else{
            logoutLinks.forEach(link => link.style.display = 'none') 
            loginLinks.style.display = 'block'
        }
    }
    )
};