import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
           <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Daw2">
              DAW 2
            </Link>
          </li>
          <li>
            <Link to="/alumnos">Ver Alumnos</Link></li>
        </ul>
        <Link to="/ricki">
              Ricki
            </Link>
            <Link to="/alumApi">
            alumoApi
            </Link>
            
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
