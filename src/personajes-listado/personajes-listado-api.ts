import Axios from "axios";
import { Personaje } from "./personajes-listado.model";
import axios from "axios";

const database = "http://localhost:3000/personajes"

export const obtenerPersonajes = async () : Promise<Personaje[]> => {
    try {
        const { data } = await Axios.get(`${database}`);
        return data;
    }
    catch (error) {
        throw new Error("Error al obtener los personajes");
    }
}

export const pintarPersonajesBuscados = async (criterio: string): Promise<Personaje[]> => {
    const personajesBuscados: Personaje[] = await axios.get(`${database}?nombre_like=${criterio}`);
    return personajesBuscados;
}
