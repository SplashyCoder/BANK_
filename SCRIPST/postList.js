
const postList = document.querySelector('.post');

export const setUpPost = data =>{
    
    if(data.length){
        let inner = '';

        data.forEach(i => {
            const post = i.data();
            console.log(post);

            const li = `    
            <li>
                <div class="postCardCont;">
                    <div class="postCard">
                        <div class="col-md-4">
                            <img src=${post.url} class="postImg" alt="Img not found">
                        </div>
                        <div class="postCardIn">
                            <div class="card-body">
                                <h5 class="card-title">${post.title}</h5>
                                <p class="card-text">${post.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            `
            inner += li
        });

        postList.innerHTML = inner;
        // console.log(postList);
    }else{
        postList.innerHTML = '<h1>login to see posts</h1>';
    }

}   


