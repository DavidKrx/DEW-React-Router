import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link, useParams} from 'react-router-dom';

export default function recetaDetalles() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { id: idRuta } = useParams();

    function fechito(){
      fetch(`http://localhost:3000/recetas/${idRuta}`)
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
      }, [idRuta,data])

    if(!loader){
      return "Cargando ..."
    }

  return (
    <div>
      <h1 className="title">Fetch Recetas API</h1>
      <div>
        <h2>Detalles Recetas</h2>
        <div className="detailsCard"> 
              <div className="card">
                  <div className="imageCardContainer"><img src={data.image} className="card-img-top" alt="..."/></div>
                  <div className="card-body">
                  <p className="card-text">Nombre de receta: {data.name}</p>
                  <p>Tipo de cocina: {data.cuisine}</p>
                  <p>Tiempo de preparación: {data.prepTimeMinutes}</p>
                  <p>Tiempo de cocción: {data.cookTimeMinutes}</p>
                  <h2>Ingredientes</h2>
                  <div className="d-flex flex-col container-tags">
                  {data.ingredients.map((ingredient) => (
                    <span>{ingredient}</span>
                  ))}
                  </div>
                  <h2>Instrucciones</h2>
                  <div className="d-flex flex-col container-tags">
                  {data.instructions.map((instruction) => (
                    <span>{instruction}</span>
                  ))}
                  </div>
                  <div className="d-flex flex-row container-tags">
                  {data.tags.map((etiqueta) => (
                    <span className="tags">{etiqueta}</span>
                  ))}
                  </div>
                  <div className="actions">
                   <button type="button" className="btn btn-warning">Editar</button>
                    <button type="button" className="btn btn-danger">Borrar</button>
                  </div>
                  </div>
                </div>
        </div>
      </div>
    </div>
  );
}