import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const wishes = [{text: 'Travel to moon', done: false},
    {text: 'Make an intro course to React', done: true},
    {text: 'Pay the gym', done: true},
    {text: 'Go to gym', done: false}
  ]
  let programadores = [
    {
        nombre: 'Antonio', apellido1: 'González', apellido2: 'González', edad: 25, experiencia: 4,
        lenguajes: ['C++', 'JS', 'PHP']
    },
    {
        nombre: 'Juana', apellido1: 'Pérez', apellido2: 'Díaz', edad: 30, experiencia: 5, lenguajes:
            ['C', 'JS', 'Java']
    },
    {
        nombre: 'Pedro', apellido1: 'Abad', apellido2: 'García', edad: 24, experiencia: 15, lenguajes:
            ['Python', 'JS', 'Java', 'C++']
    }
   
]
const uwu="Menor de edad => Carcel"
  return (
    <>
      <div className='app'>
          <h1>My wishlist</h1>
          <fieldset className='wish-input'>
            <legend className='wish-input_label'>New wish</legend>
            <input className='wish-input_field' placeholder='Enter your wish'/>
          </fieldset>
          <ul className='wish-list'>
            {wishes.map( ({text, done}, i)=>(
              <li key={text} className={`wish-list_item ${done ? 'wish-list_item--done' :''}`}>
                <label htmlFor={`wish${i}`}>{text}
                <input id={`wish${i}`} type="checkbox" checked={done}/>
                </label>
              </li>
              ))}
          </ul>
          <ul>
            {programadores.map( ({nombre,experiencia}, i)=>(
              <li key={nombre}>
                {nombre}   {experiencia >4 ? <button>{uwu}</button>:<button>:D</button>}
                
              </li>
              ))}
          </ul>
          <iframe><img src="" alt="" /></iframe>
          <button className='wish-clear' type='button'>Archive done</button>
      </div>
    </>
  )
}

export default App
