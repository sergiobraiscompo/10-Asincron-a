import Axios from "axios";
import { Personaje } from "./personajes-listado.model";

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