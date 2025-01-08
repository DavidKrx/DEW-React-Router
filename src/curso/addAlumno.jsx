import React, { useState } from 'react';
import {grupos} from "./Daw2.jsx"

function addAlumno({ addItem }) {
  const [id, setId] = useState("");
  const [grupo, setGrupo] = useState("");
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlumno = {
      id: parseInt(id),
      grupo: grupo,
      nombre: nombre,
    };
    addItem(newAlumno); // Pasar el nuevo alumno a la función addItem
    setId("");
    setGrupo("");
    setNombre(""); // Resetear los campos después de enviar
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
      />
      <select
        name="grupo"
        value={grupo}
        onChange={(e) => setGrupo(e.target.value)}
      >
        {grupos.map((grupo) => (
          <option key={grupo} value={grupo}>
            {grupo}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default addAlumno;

/* VIEJO
https://www.dhiwise.com/post/step-by-step-guide-to-building-your-first-react-crud-app

https://www.freecodecamp.org/espanol/news/react-crud-app-tutorial-como-construir-una-aplicacion-de-administracion-de-libros-en-react-desde-cero/

export default function AddAlumno(){
        return( 
        <>
         <main>
         <h1>Agregar Alumno</h1>
         <label htmlFor="idInput">Id:</label>
         <input id="idInput" type="text"/>
         <label htmlFor="">Nombre</label>
         <input type="text"/>
         <label>Grupo:</label>
         <select name="grupo" id="">

         {grupos.map(grupo=>
          <option value={grupo}>{grupo}</option>
         )}
         </select>
         </main>
       </>)
}
*/