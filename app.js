import obtenerImagenes from './api.js';


const form = document.querySelector('form');
const seccion = document.querySelector('.imagenes');

form.addEventListener('submit', async(e)=> {
e.preventDefault();
const formdata = new FormData(form);
const entrada = formdata.get('palabraIngresada');

const lasimagenes = await obtenerImagenes(entrada);

agregarEnSeccion(lasimagenes);
});


function agregarEnSeccion(lasimagenes){
lasimagenes.forEach((imagen)=>{
    const contenedor = document.createElement('img');
    contenedor.src = imagen.image;
    seccion.append(contenedor);
});


}