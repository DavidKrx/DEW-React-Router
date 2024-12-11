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
        <Form addPersona={addPersonas}/>
      </>
    )
  }