import { botonBuscar, criterioBusqueda } from "./constantes";
import { filtraPersonajes, pintarPersonajes } from "./personajes-listado";

const eventos = () => {
    if (
        botonBuscar && botonBuscar != null && botonBuscar != undefined && 
        criterioBusqueda && criterioBusqueda != undefined && criterioBusqueda != null
    ) {
        botonBuscar.addEventListener("click", () => {filtraPersonajes(criterioBusqueda.value); console.log("Clicky")});
    }
}

document.addEventListener("DOMContentLoaded", () => {
    pintarPersonajes();
    eventos();
});