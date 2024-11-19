import PropTypes from 'prop-types';
import useState from "react";
export default function Programadores({programadores}) {
  const [programadoresList, setProgramadoresList] = useState(programadores);

  return (
    <>
          <ul>
            {programadoresList.map( ({nombre,experiencia}, i)=>(
              <li key={i}>{nombre}
              {experiencia >4 && experiencia <10 ? <strong className={`wish-list_item`}>(Senior)</strong>:null}
              </li>
              ))}
          </ul>
          <button type="button" onClick={()=> {setProgramadoresList(programadoresList.map(programador=> 
          ({...programador,experiencia:programador.experiencia+1})
        ))}}>
            Añadir experiencia
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