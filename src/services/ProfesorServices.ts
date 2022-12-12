import { Profesor } from "@/interfaces/Profesor";
import sirfUrl from "./api";
import { Asignatura } from "@/interfaces/Asignatura";
import { Asistencia } from "@/interfaces/Asistencia";

export const getProfesor = async (rut: string, password:string): Promise<Profesor[]> => {
    const response = await sirfUrl.post('/profesor', {rut,password} );
    return response.data.profesor;
}

export const getAsignaturas = async( rut: string): Promise<Asignatura[]> => {
    const response = await sirfUrl.post('/asignaturas', {rut} );
    return response.data.asig;
}

export const getAsistenciaFecha = async( fecha: string, nombre_asignatura: string): Promise<Asistencia[]> => {
    const response = await sirfUrl.post('/datos', {fecha, nombre_asignatura} );
    return response.data.asis;
}