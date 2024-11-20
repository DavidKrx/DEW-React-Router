import PropTypes from 'prop-types';
import {useState} from "react";
export default function Programadores({programadores}) {
  const [programadoresList, setProgramadoresList] = useState(programadores);

  function incrementar(){ 
    setProgramadoresList(
      programadoresList.map(
        programador=>(
          {...programador,experiencia:programador.experiencia+1}
        )
      )
    );
  }

  function ala(b){
    console.log(b);
  }

  return (
    <>
          <ul>
            {programadoresList.map( ({nombre,experiencia}, i)=>(
              <>
              <li key={i} className={i}>{nombre}
              { experiencia<8 
              ?<strong className={`wish-list_item`}>(Junior)</strong>
              :<strong className={`wish-list_item`}>(Pringado)</strong>}
              {/* {experiencia >4 && <strong className={`wish-list_item`}>(Senior)</strong>} */}
              </li>
              <li>{experiencia}</li>
              </>
              ))}
          </ul>

          <button type="button" onClick={incrementar}>
            Añadir experiencia
          </button>
          
          <button type="button" onClick={()=>{ala("patata")}}>
            ALA
          </button>
    </>
  )
}

Programadores.propTypes = {
  programadores: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      apellido1: PropTypes.string.isRequired,
      apellido2: PropTypes.string.isRequired,
      edad: PropTypes.number.isRequired,
      experiencia: PropTypes.number.isRequired,
      lenguajes: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
};