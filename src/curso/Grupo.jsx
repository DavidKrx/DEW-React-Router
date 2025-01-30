import { useNavigate, useParams, Link} from "react-router-dom";

export default function Grupo({alumnos}){
const nave=useNavigate();
const {letra}=useParams();
        return( 
            <>
         <h1>Grupo {letra}</h1>
         <ul>
            {
                alumnos.filter(alumno=>alumno.grupo==letra).map(({nombre}, i)=>
                <li key={i}>{nombre}</li>
            )}
         </ul>
         <button><Link to='/alumnos/nuevo'>Nuevo Alumno</Link></button>
       </>
    )
}
