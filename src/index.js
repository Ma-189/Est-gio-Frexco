import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Produtos from './Produtos';
import Detalhes from './Detalhes';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Routes> 
            <Route path="/" element = {<Produtos/>}/>
            <Route path="/detalhes/:id" element = {<Detalhes/>}/>       
        </Routes>
    </BrowserRouter>,
document.getElementById("root")
);

