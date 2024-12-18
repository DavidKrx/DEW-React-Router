import { useState } from "react";
import Form from './FrmPersona'

let personas=[];



export default function Contenedor() {  

    let setPersonas;
    [personas, setPersonas] = useState(personas);

    function addPersonas(persona){
        setPersonas((personaAntes)=> [...personaAntes, persona]);
        console.log(personas);
    }
    
    return (
      <>
      <main>
      <Form addPersona={addPersonas}/>
        <table>
          <thead>
          <tr>
    <th>Nombre</th>
    <th>Es mayor de edad</th>
    <th>Ciclo</th>
  </tr>
          </thead>
<tbody>
{personas.map(e=>
    <tr>
    <td>{e.nombre}</td>
    <td>{e.esMayorDeEdad? "Si":"No"}</td>
    <td>{e.ciclo}</td>
  </tr>
    )}
</tbody>

</table>
      </main>

      </>
    )

  }

