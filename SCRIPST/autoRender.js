import{ db } from'./firebaseConfig.js'
import { getDocs, collection} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"

import {setUpPost}from './postList.js'

(async function(){

    try {
        const querySnapShot = await getDocs(collection(db, 'posts'));
        setUpPost(querySnapShot.docs)
    // console.log(user);
    } catch (error) {
        console.log(' ')
    } 

})();
