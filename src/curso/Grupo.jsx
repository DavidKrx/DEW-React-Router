import { useNavigate, useParams } from "react-router-dom";

const alumnos=[
    {grupo:"A",nombre:"Juan"},
    {grupo:"A",nombre:"Ju"},
    {grupo:"A",nombre:"Luan"},
    {grupo:"B",nombre:"Luna"},
    {grupo:"B",nombre:"Pedro"},
    {grupo:"B",nombre:"Amanda"},
];
export default function Grupo(){
const nave=useNavigate();
const {letra}=useParams();
        return( 
            <>
         <h1>Cursos 2º DAW</h1>
         <ul>
            {
                alumnos.filter(alumno=>alumno.grupo==letra).map(({nombre}, i)=>
                <li key={i}>{nombre}</li>
            )}
         </ul>

         <Link to={`/addAlumno/${letra}`}>Añadir Alumno</Link>
       </>
    )
}