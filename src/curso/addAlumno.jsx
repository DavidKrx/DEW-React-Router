export default function AddAlumno(){
        return( 
        <>
         <main>
         <h1>Agregar Alumno</h1>
         <label htmlFor="">Id:</label>
         <input type="text"/>
         <label htmlFor="">Nombre</label>
         <input type="text"/>
         <select name="grupo" id="">Grupo
          <option value="A">A</option>
          <option value="B">B</option>
         </select>
         </main>
       </>)
}