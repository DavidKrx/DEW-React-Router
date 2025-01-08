import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function Grupo() {
  const nave = useNavigate();
  const { letra } = useParams();

  // Definir el estado para la lista de alumnos
  const [alumnos, setAlumnos] = useState([
    { id: 1, grupo: "A", nombre: "Juan" },
    { id: 2, grupo: "A", nombre: "Ju" },
    { id: 3, grupo: "A", nombre: "Luan" },
    { id: 4, grupo: "B", nombre: "Luna" },
    { id: 5, grupo: "B", nombre: "Pedro" },
    { id: 6, grupo: "B", nombre: "Amanda" },
  ]);

  // Función para agregar un nuevo alumno
  const meterAlumno = (newAlumno) => {
    setAlumnos((prevAlumnos) => [...prevAlumnos, newAlumno]);
  };

  return (
    <>
      <h1>Grupo {letra}</h1>
      <ul>
        {alumnos
          .filter((alumno) => alumno.grupo === letra)
          .map(({ nombre }, i) => (
            <li key={i}>{nombre}</li>
          ))}
      </ul>
      <Link to="/AddAlumno">AddAlumno</Link>

      {/* Pasa la función addAlumno al formulario */}
      <addAlumno addItem={meterAlumno} />
    </>
  );
}

/*
VIEJO
import { useNavigate, useParams, Link } from "react-router-dom";

export const alumnos=[
    {id:1,grupo:"A",nombre:"Juan"},
    {id:2,grupo:"A",nombre:"Ju"},
    {id:3,grupo:"A",nombre:"Luan"},
    {id:4,grupo:"B",nombre:"Luna"},
    {id:5,grupo:"B",nombre:"Pedro"},
    {id:6,grupo:"B",nombre:"Amanda"},
];

export default function Grupo(){
const nave=useNavigate();
const {letra}=useParams();
        return( 
            <>
         <h1>Grupo {letra}</h1>
         <ul>
            {
                alumnos.filter(alumno=>alumno.grupo==letra).map(({nombre}, i)=>
                <li key={i}>{nombre}</li>
            )}
         </ul>
         <Link to='/AddAlumno'>AddAlumno</Link>
       </>
    )
}
*/