
const postList = document.querySelector('.post');

export const setUpPost = data =>{
    
    if(data.length){
        let inner = '';

        data.forEach(i => {
            const post = i.data();

            const li = `    
                <div class="postCard">
                    <div class="col-md-4">
                        <img src=${post.urlImg} class="postImg" alt="Image not found">
                        <br/>
                        <a href=${post.urlFile} target="_blank" >DESCARGAR ARCHIVO</a>
                    </div>
                    <div class="postCardIn">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.content}</p>
                        </div>
                    </div>
                </div>
            `
            inner += li
        });

        postList.innerHTML = inner;
        // console.log(postList);
    }else{
        postList.innerHTML = '<h1>No hay post</h1>';
    }

}   


