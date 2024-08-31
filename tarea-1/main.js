const url = 'https://randomuser.me/api/';
const boton = document.getElementById('boton')
const contenido = document.querySelector('div');

// function mostrarData(){
//     console.log('entro')
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data, 'data');
//         const info = data.result[0];
//         contenido.innerHTML =`<imag src='${info.results[0].picture.large}'>
//                                 <p class='title'>${info.results[0].first.name}</p>`
                                
                                
//     })
//  }

const mostrarData = async() =>{
    console.log('entro');
    const res = await fetch(url);
    const data = await res.json();
    contenido.innerHTML = `<img src='${data.results[0].picture.large}'>
                            <p>${data.results[0].phone}</p>
                            <p>${data.results[0].email}</p>
                            <p>${data.results[0].gender}</p>
                            <p>${data.results[0].name.first}</p>`
                           
}

mostrarData();

boton.addEventListener('click', mostrarData);