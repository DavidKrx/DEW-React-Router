import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Contenedor from './Anteriores/Contenedor.jsx'
import Layout from "./Layout";
import Inicio from "./curso/Inicio.jsx";
import Centro from "./curso/Centro.jsx";
import Grupo from "./curso/Grupo.jsx";
import Daw2 from "./curso/Daw2.jsx";
import AddAlumno from "./curso/AddAlumno.jsx";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
        <Route index element={ <Inicio/>} />
        <Route path="Centro" element={<Centro/>} />
        <Route path="/Daw2" element={<Daw2/>} />
        <Route path="/grupo/:letra" element={<Grupo/>}/>
        <Route path="/AddAlumno/" element={<AddAlumno/>}/>
        <Route path="*" element={<Navigate to="/"/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

