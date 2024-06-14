import React from 'react';


//Generar el tablero  del juego

const Tablero = () => {
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


export default Tablero;