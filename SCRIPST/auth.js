import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import{auth} from './firebaseConfig.js';


const siginForm = document.querySelector('.modalForm')
const modal = document.getElementById('loginModal')
const modalBackdrop = document.getElementById('modalBackdrop');


siginForm.addEventListener('submit', async event=>{
    event.preventDefault();

    try{

        const email =  document.querySelector('.modalInputEmail').value;
        const pass = document.querySelector('.modalInputPass').value;

        const userCredentials = await signInWithEmailAndPassword(auth, email, pass);

        modal.style.display = 'none';
        modalBackdrop.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        console.log(userCredentials)
    }catch(error){
        const firebaseErrors = {
            'auth/user-not-found':'User not registerd',
            'auth/wrong-password':'Icorrect Password'
        };

        console.log(firebaseErrors[error.code] || 'Something went wrong.');
    }
    siginForm.reset();
})