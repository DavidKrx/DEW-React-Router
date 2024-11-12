import React, {useState} from "react";
export default function Programadores({programadores}) {
  const [programadoresList, setProgramadoresList] = useState(programadores);

  return (
    <>
          <ul>
            {programadoresList.map( ({nombre,experiencia}, i)=>(
              <li key={i}>{nombre} {experiencia}{experiencia >4 ? <strong>(Senior)</strong>:<strong></strong>}
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