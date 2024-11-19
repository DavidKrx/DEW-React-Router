import './App.css'
import ProgramadoresList from './Programadores.'

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

export default function App() {  return (

  <ProgramadoresList programadores={programadores} />
  )
}