import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link} from 'react-router-dom';

export default function recetasapi() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

    function fechito(){
      fetch("http://localhost:3000/recetas")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoader(true);
      })
      .catch(e =>{
        console.log(e);
        setLoader(true);
      }
      );
    }
  
      useEffect(() => {
        setTimeout(() => {fechito()}, 5000 );
      }, [data])

    if(!loader){
      return "Cargando ..."
    }

    const handleDetails = (id) => {
      navigate(`/recetApi/detalles/${id}`);
    };

  return (
    <div>
      <h1 className="title">Fetch Recetas API</h1>
      <div>
        <h2>Lista de Recetas</h2>
        <div className="grid"> 
        {data.length > 0 && data.map((receta) => (
              <div key={receta.id} className="card">
                  <a onClick={() => handleDetails(receta.id)}><img src={receta.image} className="card-img-top" alt="..."/></a>
                  <div className="card-body">
                  <p className="card-text">Nombre de receta: {receta.name}</p>
                  <p>Tipo de cocina: {receta.cuisine}</p>
                  <div className="d-flex flex-row container-tags">
                  {receta.tags.map((etiqueta) => (
                    <span className="tags">{etiqueta}</span>
                  ))}
                  </div>
                  <div className="actions">
                   <button type="button" className="btn btn-warning">Editar</button>
                    <button type="button" className="btn btn-danger">Borrar</button>
                  </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

/*
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Tipo de cocina</th>
              <th>Tiempo de preparación</th>
              <th>Tiempo de cocina</th>
              <th>Ingredientes</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 && data.map((receta) => (
                <tr key={receta.id}>
                  <td>{receta.id}</td>
                  <td>{receta.name}</td>
                  <td>{receta.cuisine}</td>
                  <td>{receta.prepTimeMinutes} min</td>
                  <td>{receta.cookTimeMinutes} min</td>
                </tr>
              ))}
          </tbody>
        </table>
*/