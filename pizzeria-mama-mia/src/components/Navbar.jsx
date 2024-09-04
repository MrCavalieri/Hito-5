import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ total }) => {
  const token = false;
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <nav className="barraNavegacion">
      <div className="textoNavBar">
        <p>Pizzeria Mamma Mia!</p>
      </div>
      <ul className="contentNavBar">
        <li className="navItem">
          <Link to="/" className="boton">
            &#127829; Home
          </Link>
        </li>
        {token ? (
          <>
            <li className="navItem">
              <Link to="/profile" className="boton">
                &#128275; Perfil
              </Link>
            </li>
            <li className="navItem">
              <Link to="/logout" className="boton">
                &#128272; Salir
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="navItem">
              <Link to="/login" className="boton">
                &#128272; Ingresar
              </Link>
            </li>
            <li className="navItem">
              <Link to="/register" className="boton">
                &#128272; Registrar
              </Link>
            </li>
          </>
        )}
      </ul>
      <button className="botonCarro" onClick={handleCartClick}>
        🛒 Total: $ {total.toLocaleString()}
      </button>
    </nav>
  );
};

export default Navbar;
