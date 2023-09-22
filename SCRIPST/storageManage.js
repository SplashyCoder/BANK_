import {ref,uploadBytes,getDownloadURL} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js';

import {storage} from './firebaseConfig.js';

export const uploadFile = async (file,name) =>{
    try {

        let ImgName = `images/${name}`
        const spaceRef = ref(storage, ImgName);
        await uploadBytes(spaceRef, file);
        const url = await getDownloadURL(spaceRef)
        console.log(url)
        return (url);

    } catch (error) {

        console.log(error)
        
    }

};