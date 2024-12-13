import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Programadores</Link>
          </li>
          <li>
            <Link to="/Contenedor">Contenedor</Link>
          </li>
          <li>
            <Link to="/Header">Header</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
