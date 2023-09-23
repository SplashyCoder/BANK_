import { newData } from './dbManage.js'; 
import {uploadFile, uploadImg} from './storageManage.js'
import { v4 } from './v4uuid.js';

const dataForm = document.querySelector('.postForm');
const btn = document.querySelector('#btnholo')



dataForm.addEventListener('submit', async event =>{
    event.preventDefault();
    
    const newTitle = document.querySelector('.newPosTitleInp').value;
    const newContent = document.querySelector('.newPostContInp').value;

    const newImg = document.querySelector('#newPostImg').files[0];
    const dataNameImg = await v4()

    const newFile = document.querySelector('#newPostFile').files[0];
    const dataNameFile = await v4();

    
    try{

        const resultFile = await uploadFile(newFile,dataNameFile);    
        const resultImg = await uploadImg(newImg,dataNameImg);    
        
        await newData(newTitle,newContent,resultImg,resultFile);

        alert('Publicacion exitosa')
        dataForm.reset()

    }catch(error){
        console.log(error)
    }
});