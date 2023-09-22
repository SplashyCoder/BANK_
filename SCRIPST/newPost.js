import { newData } from './dbManage.js'; 
import {uploadFile} from './storageManage.js'

const dataForm = document.querySelector('.postForm');



dataForm.addEventListener('submit', async event =>{
    event.preventDefault();
    
    const newTitle = document.querySelector('.newPosTitleInp').value;
    const newContent = document.querySelector('.newPosTitleInp').value;
    const newImg = document.querySelector('#newPostImg').files[0];
    const dataName = document.querySelector('#newPostImgName').value;

    
    try{
    
        const result = await uploadFile(newImg,dataName);    
        await newData(newTitle,newContent,result);

        alert('Publicacion exitosa')
        dataForm.reset()

    }catch(error){
        console.log(error)
    }
});