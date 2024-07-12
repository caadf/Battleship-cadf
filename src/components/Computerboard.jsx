import React, { useEffect, useState } from "react";

const inicializarTableroMaquina = () => {
    const nuevoTableroMaquina = Array.from({ length: 10 }, () =>
      Array(10).fill({
        contenido: null,
        clickeable: true,
      })
    );
}