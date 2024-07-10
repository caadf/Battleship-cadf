
/* import React, { useState, useEffect } from "react";

//Generar el tablero 
const startBoard = () => {
    const newBoardPlayer = Array.from({ length: 10 }, () =>
        Array(10).fill({ contenido: null, clickeable: true })
    );
};

useEffect(() => {
    startBoard();
  }, [ships]); */

import React, { useEffect, useState } from "react";

export const atacarTableroJugador = (
    fila,
    colIndex,
    tableroJugador,
    setTableroJugador,
    setTurnoJugador
  ) => {
    if (fila >= 0 && fila < 10 && colIndex >= 0 && colIndex < 10 && tableroJugador) {
      const nuevoTableroJugador = JSON.parse(JSON.stringify(tableroJugador));
  
      const cuadroSeleccionado = nuevoTableroJugador[fila][colIndex];
  
      if (cuadroSeleccionado.contenido?.tipo === "nave") {
        cuadroSeleccionado.contenido = {
          tipo: "nave-disparada",
          clickeable: false,
          ataqueExitoso: true,
        };
      } else if (!cuadroSeleccionado.contenido) {
        cuadroSeleccionado.contenido = {
          tipo: "disparo",
          ataqueExitoso: false,
          clickeable: false,
        };
      }
  
      setTableroJugador(nuevoTableroJugador);
      setTurnoJugador(true);
    }
  };

  const Jugador = ({
    juegoIniciado,
    setNavesColocadas,
    setMostrarBotonNavesAleatorias,
    turnoJugador,
    tableroJugador,
    setTableroJugador,
    setTurnoJugador,
  }) => {
    const [colocandoNaves, setColocandoNaves] = useState(false);
  
    const inicializarTablero = () => {
      const nuevoTableroJugador = Array.from({ length: 10 }, () =>
        Array(10).fill({ contenido: null, clickeable: true })
      );
      setTableroJugador(nuevoTableroJugador);
    };
  
    useEffect(() => {
      inicializarTablero();
    }, [colocandoNaves]);
  
    const handleClickCuadro = (fila, columna) => {
      if (juegoIniciado && turnoJugador) {
        const cuadroSeleccionado = tableroJugador[fila][columna];
  
        if (!esPropioTablero(fila, columna) && cuadroSeleccionado.clickeable && cuadroSeleccionado.contenido === null) {
          atacarTableroJugador(fila, columna, tableroJugador, setTableroJugador, setTurnoJugador);
        }
      }
    };
  
    const esPropioTablero = (fila, columna) => {
      return fila >= 0 && fila < 10 && columna >= 0 && columna < 10;
    };
  
    const handleColocarNaves = () => {
      const nuevoTableroJugador = Array.from({ length: 10 }, () =>
        Array(10).fill({ contenido: null, clickeable: true })
      );
  
      // Implementation of colocarNavesEnTablero remains unchanged
  
      setTableroJugador(nuevoTableroJugador);
      setColocandoNaves(false);
      setNavesColocadas(true);
      setMostrarBotonNavesAleatorias(false);
    };
  
    return (
      <div className="my-5">
        {/* Tablero rendering remains unchanged */}
        {/* Button rendering remains unchanged */}
      </div>
    );
  };
  
  export default Jugador;
  