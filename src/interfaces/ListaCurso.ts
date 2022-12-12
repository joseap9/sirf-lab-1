import { Alumno } from "./Alumno";
import { Asistencia } from "./Asistencia";
import { Profesor } from "./Profesor";

export interface ListaCurso {
    id: number;
    fecha: string;
    curso: Asistencia;
    profesor: Profesor;
    alumno: Alumno;
}