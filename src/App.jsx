import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AlumnosList from './clase/AlumnosList';
import AlumnosForm from './clase/AlumnosForm';
import Inicio from "./curso/Inicio.jsx";
import Grupo from "./curso/Grupo.jsx";
import Daw2 from "./curso/Daw2.jsx";
import Layout from "./Layout";
import Rickandmortyapi from './apiRequest/rickandmortyapi.jsx';
import Alumnosapi from './apiRequest/alumnosapi.jsx'
import Recetasapi from './apiRequest/recetasapi.jsx'; 
import RecetaDetalles from './apiRequest/recetaDetalles.jsx'
// Datos iniciales
const alumnosData = [
  { id: 1, grupo: "A", nombre: "Juan" },
  { id: 2, grupo: "A", nombre: "Jumanji" },
  { id: 3, grupo: "A", nombre: "Bartolo" },
  { id: 4, grupo: "B", nombre: "Luna" },
  { id: 5, grupo: "B", nombre: "Pedro" },
  { id: 6, grupo: "B", nombre: "Amanda" },
];

export const grupos = ["A", "B", "C", "D"]; // Opciones de grupo

export default function App(){
  const [alumnos, setAlumnos] = useState(alumnosData);

  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={ <Inicio/>} />
          <Route path="/Daw2" element={<Daw2/>} />
          <Route path="/grupo/:letra" element={<Grupo alumnos={alumnos}/>}/>
          <Route path="/alumnos" element={<AlumnosList alumnos={alumnos} setAlumnos={setAlumnos} />} />
          <Route path="/alumnos/nuevo" element={<AlumnosForm alumnos={alumnos} setAlumnos={setAlumnos} />} />
          <Route path="/alumnos/editar/:id" element={<AlumnosForm alumnos={alumnos} setAlumnos={setAlumnos} />} />
          <Route path="/ricki" element={<Rickandmortyapi/>} />
          <Route path="/recetApi" element={<Recetasapi />} />
          <Route path="/recetApi/detalles/:id" element={<RecetaDetalles/>} />
        </Route>
        </Routes>
    </BrowserRouter>
  );
};




