import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/menu';
import Tablero from './pages/tablero';

const App = () => {
    return (
        <>
      <BrowserRouter>
            <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/tablero' element={<Tablero />} />
            </Routes>
        </BrowserRouter>
       
    </>
    )
}

export default App;

