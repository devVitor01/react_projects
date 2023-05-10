import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import SaboresPage from '../pages/sabores';
import SobrePage from '../pages/sobre';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/sabores' element={<SaboresPage/>}/>
            <Route path='/sobre' element={<SobrePage/>}/>
        </Routes>
    </BrowserRouter>
)

export default Rotas;