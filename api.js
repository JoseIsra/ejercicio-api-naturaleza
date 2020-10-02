

const API = "https://nature-image-api.now.sh/search?q=";

export default async function obtenerImagenes(terminoABuscar){
    const respuesta = await fetch(`${API}${terminoABuscar}`);
    const imagenes = await respuesta.json();

    return imagenes.images;
}