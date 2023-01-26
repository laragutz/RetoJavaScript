const URL_POST = 'https://javascript-38da6-default-rtdb.firebaseio.com/.json';

// Función para enviar los datos del formulario al servidor de firebase
const postItem = async (postNew) => {
    try{
        const response = await fetch(URL_POST, {
            method: 'POST',
            headers: {  'Content-Type': 'application/json;charset=UTF-8' },
            body: JSON.stringify(postNew)
        });
    }catch(error){
        alert('Error al enviar los datos')
    }
};

const formIndex = document.querySelector('#formPostNew');
formIndex.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputsList = document.querySelectorAll('#formPostNew input');
    const dataPost = {};
    
    inputsList.forEach((input) => {
        dataPost[input.name] = input.value;
    });
    postItem(dataPost);
});

const formPreview = document.querySelector('#btnPreview');
formPreview.addEventListener('onclick', (event) => {
    const inputsList = document.querySelectorAll('#formPostNew input');
    const dataPost = {};
});
