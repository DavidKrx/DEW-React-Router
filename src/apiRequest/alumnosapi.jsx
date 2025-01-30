import { useEffect } from "react";
import { useState } from "react";

export default function rickandmortyapi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/alumnos")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <h1 className="title">Fetch Alumnos API</h1>
      <div>
        <h2>Lista de Alumnos</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Grupo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 && data.map((alumno) => (
                <tr key={alumno.id}>
                  <td>{alumno.id}</td>
                  <td>{alumno.nombre}</td>
                  <td>{alumno.grupo}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
