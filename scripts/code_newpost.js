const URL_POST = 'https://javascript-38da6-default-rtdb.firebaseio.com/.json';

// Función para enviar los datos del formulario al servidor de firebase
const postItem = async (postNew) => {
    try{
        const response = await fetch(URL_POST, {
            method: 'POST',
            headers: {  'Content-Type': 'application/json;charset=UTF-8' },
            body: JSON.stringify(postNew)
        });
        window.location.href = `../index.html`;
    }catch(error){
        alert('Error al enviar los datos')
    }
};

const formIndex = document.querySelector('#formPostNew');
formIndex.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputsList = document.querySelectorAll('#formPostNew input[type="text"],input[type="url"], textarea');
    const dataPost = {};
    
    inputsList.forEach((input) => {
        dataPost[input.name] = input.value;
    });
    postItem(dataPost);
});

const previewButton = () =>{
    const formPreview = document.querySelector('#btnPreview');
    formPreview.addEventListener('click',() => {
        extractData();
    });
};

const extractData = () =>{
    const inputsList = document.querySelectorAll('#formPostNew input[type="text"],input[type="url"], textarea');
    const dataPost = {};
    
    inputsList.forEach((input) => {
        dataPost[input.name] = input.value;
    });
    drawPreview(dataPost);
};

const drawPreview = (data) =>{
    clearForm();
    const indexPost = document.querySelector('#formPostNew');
    const articlePost = document.createElement('article');
    articlePost.classList.add('articleNew');
    indexPost.appendChild(articlePost);
    const headerArticle = document.createElement('header');
    articlePost.appendChild(headerArticle);
    const divHeader = document.createElement('div');
    headerArticle.appendChild(divHeader);
    const h1Div = document.createElement('h1');
    h1Div.textContent = data.title;
    divHeader.appendChild(h1Div);
    const divSymbols = document.createElement('div');
    headerArticle.appendChild(divSymbols);
    const h4Symbols = document.createElement('h4');
    h4Symbols.textContent = data.symbols;
    divSymbols.appendChild(h4Symbols);
    const divArticle = document.createElement('div');
    articlePost.appendChild(divArticle);
    const pName = document.createElement('p');
    pName.textContent = data.name;
    divArticle.appendChild(pName);
    
};

const clearForm = () =>{
    const removeElement = document.querySelectorAll('div.formPost');
    removeElement.forEach((element) => {
        element.remove();
    });
};

const editButton = () =>{
    const formPreview = document.querySelector('#btnEdit');
    formPreview.addEventListener('click',() => {
        fillData();
    });
};

const fillData = () =>{
    alert('fillData');
    clearPreview();
};


const clearPreview = () =>{
    alert('clearPreview');
};

previewButton();
editButton();
