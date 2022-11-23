import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './global.css';
import Home from './pages/Home';
import UserSelected from './pages/UserSelected';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/employee/:id" element={<UserSelected/>}/>
    </Routes>
  </BrowserRouter>
);
