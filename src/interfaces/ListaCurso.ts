import { Alumno } from "./Alumno";
import { Curso } from "./Curso";
import { Profesor } from "./Profesor";

export interface ListaCurso {
    id: number;
    fecha: string;
    curso: Curso;
    profesor: Profesor;
    alumno: Alumno;
}