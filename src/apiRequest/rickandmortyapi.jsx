import { useEffect } from "react";
import { useState } from "react";

const Result ={
    id: "",
    name: "",
    image: ""
  }

  export default function rickandmortyapi() {
    const [data, setData] = useState(Result);

    useEffect(()=> {
       fetch('https://rickandmortyapi.com/api/character/?page=8')
       .then( res => res.json())
       .then(res =>  {
          setData(res.results);
       })
       .catch(console.log)   
    },[])

  return (
    <div>
      <h1 className="title">Fetching data and create custom Hook</h1>
      <span className="subtitle">using Rick and Morty API</span>
      {
        (data.length > 0) && data.map( ({ id, image, name }) => (
          <div key={id}> 
            <img src={image} alt={image} /> 
            <p>{name}</p> 
          </div>
          
        ))
      }
    </div>
  )
}