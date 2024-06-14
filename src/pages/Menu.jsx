import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa"


//Pagina principal del juego
const Menu = () => {
  return (
    <>


      <div className="container">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://media.istockphoto.com/id/972941832/es/foto/bestia-del-mar.jpg?s=612x612&w=0&k=20&c=3Y_p-Sy_3cTL6qMUu13zi0PJYfJLMrkXHj4KxtXjg-I=" class="img-fluid rounded-start" alt="..." />
          </div>
          <div className="titulo col-md-8">
            <div className="card-body">
              <h1 class="card-title">Battleship</h1>
              <h3 class="card-text">Jugar!</h3>
              <Link to="/tablero" className="boton-play">
                <FaPlay />
              </Link>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Menu;