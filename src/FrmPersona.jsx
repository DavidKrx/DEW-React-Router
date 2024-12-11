import { useState } from "react";
import PropTypes from "prop-types";


export default function Form({addPersona}) {

    const unaPersona =
    {
        nombre: 'Antonio', esMayorDeEdad: true, ciclo:'medio'
    }

    let setNombre, setMayorEdad, setCiclo;
    [unaPersona.nombre,setNombre]= useState(unaPersona.nombre);
    [unaPersona.esMayorDeEdad,setMayorEdad]= useState(unaPersona.esMayorDeEdad);
    [unaPersona.ciclo,setCiclo]= useState(unaPersona.ciclo);
    
    return (
    <>
      <form action="" onSubmit={(e)=>{
            e.preventDefault();
            addPersona(unaPersona);}} >
        <label htmlFor="nombre">Nombre Completo:</label>
        <input type="text" name="nombre" id="nombre" value={unaPersona.nombre} checked={unaPersona.nombre} onChange={(e)=>{setNombre(e.target.value);}}/>
        <label htmlFor="mayor-edad">Es mayor de edad: </label>
        <input type="checkbox" name="mayor-edad" id="mayor-edad" checked={unaPersona.esMayorDeEdad} onChange={(e)=>{setMayorEdad(e.target.checked);}}/>
        
        <span>Ciclo:</span>
      
        <label htmlFor="ciclo-medio">medio</label>
        <input type="radio" name="ciclo" id="ciclo-medio" value='medio' checked={unaPersona.ciclo=='medio'} onChange={(e)=>{setCiclo(e.target.value);}}/>
        <label htmlFor="ciclo-superior">superior </label>
        <input type="radio" name="ciclo" id="ciclo-superior" value='superior' checked={unaPersona.ciclo=='superior'} onChange={(e)=>{setCiclo(e.target.value);} }/>

        <input type="Submit"/>
      </form>
    </>
    )
}


Form.propTypes={
    unaPersona:PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        esMayorDeEdad: PropTypes.bool,
        ciclo: PropTypes.string.isRequired,
      })};
