import React from 'react';
import { useNavigate, Link} from 'react-router-dom';

export default function AlumnosList ({ alumnos, setAlumnos }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setAlumnos(alumnos.filter((alumno) => alumno.id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/editar/${id}`);
  };

  return (
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
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td>{alumno.id}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.grupo}</td>
              <td>
                <button onClick={() => handleEdit(alumno.id)}>Editar</button>
                <button onClick={() => handleDelete(alumno.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button><Link to='/nuevo'>Nuevo Alumno</Link></button>
    </div>
  );
};


