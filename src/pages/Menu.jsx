import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa"


const Menu = () => {
  return (
    <>
      <div className="container">

        <h1 className="titulo">Battleship</h1>

        <Link to="/tablero" className="btn-iniciar-juego d-flex justify-content-center align-items-center text-decoration-none">
          <FaPlay />
        </Link>

      </div>
    </>
  );
};

export default Menu;