import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
//import Form from './persona.jsx' 
import Contenedor from './Anteriores/Contenedor.jsx'
import Layout from "./Layout";
import Inicio from "./curso/Inicio.jsx";
import Centro from "./curso/Centro.jsx";
import Grupo from "./curso/Grupo.jsx";
import Daw2 from "./curso/Daw2.jsx";
import addAlumno from "./curso/addAlumno.jsx";

let programadores = [
  {
      nombre: 'Antonio', apellido1: 'González', apellido2: 'González', edad: 25, experiencia: 1,
      lenguajes: ['C++', 'JS', 'PHP']
  },
  {
      nombre: 'Juana', apellido1: 'Pérez', apellido2: 'Díaz', edad: 30, experiencia: 2, lenguajes:
          ['C', 'JS', 'Java']
  },
  {
      nombre: 'Pedro', apellido1: 'Abad', apellido2: 'García', edad: 24, experiencia: 3, lenguajes:
          ['Python', 'JS', 'Java', 'C++']
  }
]

let deportistas=[
  {nombre: 'Antonio', apellido1: 'García', apellido2: 'González', sexo: 'H', edad:25, equipo: 'Trotamundos',
              participaEn:[ {carrera: 'ochoKm',tiempoEnSegundos: 1855, distanciaKm: 8},
                            {carrera: 'mediaMaraton',tiempoEnSegundos: 4855, distanciaKm: 21},
                            {carrera: 'maraton',tiempoEnSegundos: 6055, distanciaKm: 42}
                          ]},
  {nombre: 'Juan', apellido1: 'Carballo', apellido2: 'Delgado', sexo: 'H', edad:45, equipo: 'Clator',
              participaEn:[ {carrera: 'ochoKm',tiempoEnSegundos: 1955, distanciaKm: 8},
                            {carrera: 'maraton',tiempoEnSegundos: 6155, distanciaKm: 42}
                          ]},
  {nombre: 'Ayoze', apellido1: 'Mesa', apellido2: 'Herrera', sexo: 'H', edad:38, equipo: 'Clator',
              participaEn:[ {carrera: 'ochoKm',tiempoEnSegundos: 1975, distanciaKm: 8},
                            {carrera: 'mediaMaraton',tiempoEnSegundos: 4985, distanciaKm: 21},
                            {carrera: 'maraton',tiempoEnSegundos: 6188}
                          ]},
  {nombre: 'Antonio', apellido1: 'Galván', apellido2: 'Vera', sexo: 'H', edad:61, equipo: 'Trotamundos',
              participaEn:[ {carrera: 'cuatroKm',tiempoEnSegundos: 995, distanciaKm: 4},
                            {carrera: 'ochoKm',tiempoEnSegundos: 2055, distanciaKm: 8},
                            {carrera: 'mediaMaraton',tiempoEnSegundos: 5855, distanciaKm: 21}
                          ]},
  {nombre: 'Carmen', apellido1: 'Morales', apellido2: 'Vera', sexo: 'M', edad:35, equipo: 'Trotamundos',
              participaEn:[ {carrera: 'cuatroKm',tiempoEnSegundos: 1055, distanciaKm: 4},
                            {carrera: 'ochoKm',tiempoEnSegundos: 2255, distanciaKm: 8},
                            {carrera: 'mediaMaraton',tiempoEnSegundos: 5985, distanciaKm: 21}
                          ]}
]

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
        <Route index element={ <Inicio/>} />
        <Route path="Centro" element={<Centro/>} />
        <Route path="/Daw2" element={<Daw2/>} />
        <Route path="/grupo/:letra" element={<Grupo/>}/>
        <Route path="/addAlumno/:letra" element={<addAlumno/>}/>
        <Route path="Contenedor" element={<Contenedor/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
/*    
<BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
        <Route index element={ <ProgramadoresList programadores={programadores}/>} />
        <Route path="deportistas" element={ <DeportistasList deportistas={deportistas}/>} />
        <Route path="contenedor" element={  <Contenedor/>} />
        <Route path="header" element={<Header/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Route>
    </Routes>
</BrowserRouter>*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

