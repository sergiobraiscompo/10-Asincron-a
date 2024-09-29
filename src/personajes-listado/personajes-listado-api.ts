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

// Obtén la promesa de la API más rápida
export const devuelvePersonajesEncontrados = async (criterio: String): Promise<Personaje[]> => {
    const arrayPersonajes: Personaje[] = [];
    
    const personajesEncontradosPromesa = new Promise((resolve, reject) => {
        Axios.get(`${database}?nombre_like=${criterio}`)
        .then((response) => {
            resolve({
                ...response.data.map((datosPersonaje: Personaje) => {
                    arrayPersonajes.push(datosPersonaje);
                })
            });
    
            reject
        })
        .catch(reject => console.log(`Error al mostrar los personajes buscados. \n ${reject}`));        
    })
    
    await personajesEncontradosPromesa;
    return arrayPersonajes;
}
