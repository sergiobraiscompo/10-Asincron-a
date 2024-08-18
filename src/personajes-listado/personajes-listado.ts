import { obtenerPersonajes } from "./personajes-listado-api";
import { Personaje } from "./personajes-listado.model";


const crearElementoImagen = (imagenPersonaje: string, nombre: string): HTMLImageElement => {
    const imagen = document.createElement("img");
    imagen.src = imagenPersonaje;
    imagen.alt = nombre;
    return imagen;
};

const crearElementoParrafo = (elemento: string, texto: string): HTMLParagraphElement => {
    const parrafo = document.createElement("p");
    parrafo.className = "campo-personaje";
    parrafo.id = "campo-personaje";
    parrafo.textContent = elemento + texto;

    return parrafo;
};

const creaContenedorPersonaje = (personaje: Personaje): HTMLDivElement => {
    const elementoPersonaje = document.createElement("div");
    elementoPersonaje.className = "personaje-contenedor";

    const imagen = crearElementoImagen(personaje.imagen, personaje.nombre);
    elementoPersonaje.appendChild(imagen);

    const nombre = crearElementoParrafo("Nombre: ", personaje.nombre);
    elementoPersonaje.appendChild(nombre);

    const Especialidad = crearElementoParrafo("Especialidad: ", personaje.especialidad);
    elementoPersonaje.appendChild(Especialidad);

    const habilidades = crearElementoParrafo("Habilidades: ", personaje.habilidades);
    elementoPersonaje.appendChild(habilidades);
    
    return elementoPersonaje;
}

const pintarPersonajes = async (): Promise<void> => {
    const personajes = await obtenerPersonajes();
    const listado = document.querySelector("#listado-personajes");

    if (listado && listado instanceof HTMLDivElement) {
        personajes.forEach((personaje) => {
            const contenedorPersonaje = creaContenedorPersonaje(personaje);
            listado.appendChild(contenedorPersonaje);
        })
    } else {
        throw new Error("No se ha encontrado el contenedor del listado");
    }
}

document.addEventListener("DOMContentLoaded", pintarPersonajes);