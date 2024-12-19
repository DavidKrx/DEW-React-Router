import { Outlet, Link } from "react-router-dom";
const grupos=["A","B"];

export default function Daw2(){
        return( 
        <>
         <main>
         <h1>Cursos 2º DAW</h1>
         <ul>
         {grupos.map(grupo=>
         <li key={grupo}>
        <Link to={`/grupo/${grupo}`}>2º DAW {grupo}</Link>
         </li>
         )}
         </ul>

         </main>
       </>)
}