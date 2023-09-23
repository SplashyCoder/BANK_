import { signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import {auth} from'./firebaseConfig.js'

import { loginCheck } from "./loginCheck.js";


const logout = document.querySelector('.logOutChecker');

logout.addEventListener('click', async event =>{
    // console.log('logout')
    const outUser = await signOut(auth);
    loginCheck(outUser)
    window.location.pathname == '/BANC0/index.html' ? 
        null:
        location.replace('../index.html')

});