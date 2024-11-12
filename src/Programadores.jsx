import React, {useState} from "react";
export default function Programadores({programadores}) {
  const [programadoresList, setProgramadoresList] = useState(programadores);

  return (
    <>
          <ul>
            {programadoresList.map( ({nombre,experiencia}, i)=>(
              <li key={i}>{nombre}
              {experiencia >4 && experiencia <10 ? <strong>(Senior)</strong>:null || experiencia >9 ? <strong>(Pro)</strong>:null}
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