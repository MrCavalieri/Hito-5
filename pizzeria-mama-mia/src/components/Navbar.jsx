import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext"; // Importar el contexto

const Navbar = () => {
  const { total } = useContext(CartContext); // Consumir el total del carrito
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
      </ul>
      <button className="botonCarro" onClick={handleCartClick}>
        🛒 Total: $ {total.toLocaleString()}
      </button>
    </nav>
  );
};

export default Navbar;
