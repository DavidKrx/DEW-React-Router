import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { grupos } from '../App';

export default function AlumnosForm ( {alumnos, setAlumnos}) {
  const [formData, setFormData] = useState({ id: '', nombre: '', grupo: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id: idRuta } = useParams();

  useEffect(() => {
    if (idRuta) {
      const alumno = alumnos.find((alumno) => alumno.id == parseInt(idRuta));
      if (alumno) {
        setFormData({ ...alumno });
      }
    }
  }, [idRuta, alumnos]);

  const handleChange = (e) => {
    const {name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const editSubmit = (e) => {
    e.preventDefault();
    const { id, nombre, grupo } = formData;
    let formErrors = {};

    // Validaciones
    if (!id || id === '') {
      formErrors.id = 'El ID es obligatorio';
    } 

    if (!nombre || nombre.length < 4 || nombre.length > 20) {
      formErrors.nombre = 'El nombre debe tener entre 4 y 20 caracteres';
    }
    if (!grupo) {
      formErrors.grupo = 'El grupo es obligatorio';
    }

    // Si hay errores, no enviamos el formulario
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
      // Si estamos editando, actualizamos el alumno
    setAlumnos((prevAlumnos) =>
        prevAlumnos.map((alumno) =>
          alumno.id === parseInt(id) ? formData : alumno
      )
    );

    navigate('/alumnos');
  };

  const addSubmit= (e) => {
    e.preventDefault();
    const { id, nombre, grupo } = formData;
    let formErrors = {};

    // Validaciones
    
    if (!id || isNaN(id)) {
      formErrors.id = 'El ID es obligatorio y debe ser un número válido';
    }
    if (alumnos.some((alumno) => alumno.id === parseInt(formData.id))) {
      formErrors.id = 'El ID ya existe';
    }

    if (!nombre || nombre.length < 4 || nombre.length > 20) {
      formErrors.nombre = 'El nombre debe tener entre 4 y 20 caracteres';
    }
    if (!grupo) {
      formErrors.grupo = 'El grupo es obligatorio';
    }

    // Si hay errores, no enviamos el formulario
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
      // Si estamos creando un nuevo alumno, lo agregamos
    setAlumnos(alumnos => [...alumnos, formData]);
    navigate('/alumnos');
  };

  return (
    <div>
      <h2>{idRuta ? 'Editar Alumno' : 'Añadir Alumno'}</h2>
      <form onSubmit={idRuta ? editSubmit:addSubmit}>
        <div>
          <label hidden={idRuta ? true : false}>ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            hidden={idRuta ? true : false}
          />
          {errors.id && <span className='errorMessage'>{errors.id}</span>}
        </div>

        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <span className='errorMessage'>{errors.nombre}</span>}
        </div>

        <div>
          <label>Grupo</label>
          <select
            name="grupo"
            value={formData.grupo}
            onChange={handleChange}
          >
            <option value="">Seleccionar grupo</option>
            {grupos.map((grupo) => (
              <option key={grupo} value={grupo}>{grupo}</option>
            ))}
          </select>
          {errors.grupo && <span className='errorMessage'>{errors.grupo}</span>}
        </div>

        <button type="submit">{idRuta ? 'Actualizar' : 'Añadir'}</button>
      </form>
    </div>
  );
};


