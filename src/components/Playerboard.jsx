
import React, { useState, useEffect } from "react";

//Generar el tablero 
const startBoard = () => {
    const newBoardPlayer = Array.from({ length: 10 }, () =>
        Array(10).fill({ contenido: null, clickeable: true })
    );
}