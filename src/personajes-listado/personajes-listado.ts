import { obtenerPersonajes, devuelvePersonajesEncontrados } from "./personajes-listado-api";
import { Personaje } from "./personajes-listado.model";
import { eventos } from "./shell";

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
    const listadoElement = document.querySelector("#listado-personajes");

    const contenedorPersonaje = document.createElement("div");
    contenedorPersonaje.className = "personaje-contenedor";

    const imagen = crearElementoImagen(personaje.imagen, personaje.nombre);
    contenedorPersonaje.appendChild(imagen);
    console.log(imagen)

    const nombre = crearElementoParrafo("Nombre: ", personaje.nombre);
    contenedorPersonaje.appendChild(nombre);

    const Especialidad = crearElementoParrafo("Especialidad: ", personaje.especialidad);
    contenedorPersonaje.appendChild(Especialidad);

    const habilidades = crearElementoParrafo("Habilidades: ", personaje.habilidades.toString());
    contenedorPersonaje.appendChild(habilidades);


    if (listadoElement && listadoElement != null && listadoElement != undefined) {
        return listadoElement.appendChild(contenedorPersonaje);
    } else {
        throw new Error(`Ha ocurrido un error al crear el contenedor del personaje.`)
    }
}

export const pintarListadoInicialPersonajes = async (): Promise<void> => {
    const personajes = await obtenerPersonajes();

        personajes.forEach((personaje) => {
            creaContenedorPersonaje(personaje);
        })
}


const eliminaContenedoresPersonajes = () => {
    const listadoElement = document.querySelector("#listado-personajes");

    if (listadoElement && listadoElement != null && listadoElement != undefined) {
        listadoElement.replaceChildren()
    }
}

export const filtraPersonajes = async (criterio: string) => {
    const listadoElement = document.querySelector("#listado-personajes");
    const personajesEncontrados = await devuelvePersonajesEncontrados(criterio);
    eliminaContenedoresPersonajes();
    
    // Crea los contenedores de los personajes
    for (const personaje of personajesEncontrados) {
        const contenedorPersonaje = creaContenedorPersonaje(personaje);
    
        if (listadoElement && listadoElement != null && listadoElement != undefined) {
            listadoElement.appendChild(contenedorPersonaje);
        }
    }
}



document.addEventListener("DOMContentLoaded", () => {
    pintarListadoInicialPersonajes();
    eventos();
})