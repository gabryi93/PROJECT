import { useContext } from "react";
import { Link } from "react-router-dom";
import SobreNosotros from "../pages/SobreNosotros";
import Context from "./Context";

function NavBar({ user }) {
  const { logout, getEmail } = useContext(Context);
  let test = getEmail;
  console.log(test);
  return (
    <nav
      className="navbar navbar-expand-lg bg-light rounded"
      aria-label="Thirteenth navbar example"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample11"
          aria-controls="navbarsExample11"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-lg-flex"
          id="navbarsExample11"
        >
          <Link to="/" class="navbar-brand col-lg-3 me-0" >
            <span className="material-symbols-outlined">directions_car</span>
          </Link>

          {/* <a className="navbar-brand col-lg-3 me-0" >Inicio</a> */}
          <ul className="navbar-nav col-lg-6 justify-content-lg-center">
           
            <li className="nav-item">
              <Link to="/sobreNosotros" className="nav-link">
                Sobre nosotros
              </Link>
            </li>
          </ul>
          <div className="d-lg-flex col-lg-3 justify-content-lg-end">
            
            <Link to="/userProfile" className="btn btn-primary">
              <span class="material-symbols-outlined">person</span>
            </Link>
            <button onClick={logout} className="btn btn-danger miboton">
              <span class="material-symbols-outlined">logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 

export default NavBar;
