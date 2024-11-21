import PropTypes from "prop-types";
import { useState } from "react";
export default function Deportistas({deportistas}) {
  const [mayus, setMayus] = useState(false);


  return (
    <>
      <ul>
        {deportistas.map(({ nombre, apellido1, apellido2}, i) => (
            <li key={i} className={i}>
            
            {mayus ? `${nombre.toUpperCase()} ${apellido1.toUpperCase()} ${apellido2.toUpperCase()}`: `${nombre.toLowerCase()} ${apellido1.toLowerCase()} ${apellido2.toLowerCase()}`}
            </li>
        ))}
      </ul>
      <button type="button" onClick={()=> {setMayus(!mayus)}}>
       TOlower/ToUp
      </button>
    </>
  );
}

Deportistas.propTypes = {
  deportistas: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      apellido1: PropTypes.string.isRequired,
      apellido2: PropTypes.string.isRequired,
    })
  ).isRequired,
};
