import { newData } from './dbManage.js'; 
import {uploadFile, uploadImg} from './storageManage.js'

const dataForm = document.querySelector('.postForm');



dataForm.addEventListener('submit', async event =>{
    event.preventDefault();
    
    const newTitle = document.querySelector('.newPosTitleInp').value;
    const newContent = document.querySelector('.newPosTitleInp').value;

    const newImg = document.querySelector('#newPostImg').files[0];
    const dataNameImg = document.querySelector('#newPostImgName').value;

    const newFile = document.querySelector('#newPostFile').files[0];
    const dataNameFile = document.querySelector('#newPostImgName').value;

    const URL = "https://www.uuidgenerator.net/api/version4"
    
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