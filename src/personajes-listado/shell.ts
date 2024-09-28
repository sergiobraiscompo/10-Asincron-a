import { botonBuscar, criterioBusqueda } from "./constantes";
import { filtraPersonajes } from "./personajes-listado";

export const eventos = () => {
    if (
        botonBuscar && botonBuscar != null && botonBuscar != undefined && 
        criterioBusqueda && criterioBusqueda != undefined && criterioBusqueda != null
    ) {
        botonBuscar.addEventListener("click", () => filtraPersonajes(criterioBusqueda.value));
    }
}