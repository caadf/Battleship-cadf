import React from 'react';
import { Link } from "react-router-dom";
import Playerboard from "../components/Playerboard";
import Computerboard from "../components/Computerboard";

//Generar el tablero  del juego

/* const Tablero = () => {
  const gameboard = {
    columna: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    filas: [1, 2, 3, 4, 5, 6, 7, 8, 9,]
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>

            {
              gameboard.columna.map((numero, indice) => (
                <th scope="col">{numero}</th>

              ))
            }


          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            {
              gameboard.filas.map((numero, indice) => (
                <th scope="col">{numero}</th>

              ))
            }




          </tr>




        </tbody>
      </table>

    </>

  )
}


export default Tablero; */

const Tableros = () => {
  const [juegoIniciado, setJuegoIniciado] = useState(false);
  const [navesColocadas, setNavesColocadas] = useState(false);
  const [mostrarBotonNavesAleatorias, setMostrarBotonNavesAleatorias] =
    useState(true);
  const [turnoJugador, setTurnoJugador] = useState(true);
  const [tableroMaquina, setTableroMaquina] = useState([]);
  const [tableroJugador, setTableroJugador] = useState([]);

  const handleIniciarJuego = () => {
    if (navesColocadas) {
      setJuegoIniciado(true);
      setMostrarBotonNavesAleatorias(false);
      setTurnoJugador(true);
    } else {
      Swal.fire("Coloca tus naves para jugar!");
    }
  };

  return (
    <div className="p-5">
      <div className="row">
        <Link to="/" className="btn-regresar-al-menu col-4 text-white">
          Regresar al menú
        </Link>
        <h2 className="col-4">Battleship</h2>
        <div className="col-4"></div>
      </div>

      <div className="contenedor-tableros">
        <Playerboard
          juegoIniciado={juegoIniciado}
          setNavesColocadas={setNavesColocadas}
          setMostrarBotonNavesAleatorias={setMostrarBotonNavesAleatorias}
          turnoJugador={turnoJugador}
          setTurnoJugador={setTurnoJugador}
          tableroMaquina={tableroMaquina}
          setTableroJugador={setTableroJugador}
          tableroJugador={tableroJugador}
          setTableroMaquina={setTableroMaquina}
        />
        <Computerboard
          juegoIniciado={juegoIniciado}
          turnoJugador={turnoJugador}
          setTurnoJugador={setTurnoJugador}
          setTableroMaquina={setTableroMaquina}
          tableroJugador={tableroJugador}
          setTableroJugador={setTableroJugador}
          atacarTableroJugador={atacarTableroJugador}
        />
      </div>

      <div
        className={juegoIniciado ? `turno-mensaje text-center` : "text-center"}
      >
        {juegoIniciado && (
          <h3>{turnoJugador ? "Es tu turno" : "Turno del oponente"}</h3>
        )}
      </div>

      <div className="d-flex justify-content-center align-items-center">
        {!juegoIniciado && (
          <button
            className="btn btn-success btn-jugar"
            onClick={handleIniciarJuego}
          >
            Jugar
          </button>
        )}
      </div>
    </div>
  );
};

export default Tableros;