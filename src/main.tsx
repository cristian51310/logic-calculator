import './styles/index.css';
import App from './pages/App';
import { createRoot } from 'react-dom/client';
import { Login } from '@/pages/Login'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/SignUp';
import { Xor } from './pages/Compuertas/Xor';
import { And } from './pages/Compuertas/And';
import { Nand } from './pages/Compuertas/Nand';
import { Nor } from './pages/Compuertas/Nor';
import { Not } from './pages/Compuertas/Not';
import { Or } from './pages/Compuertas/Or';

const root = createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />

        <Route path="/not" element={<App> <Not /></App>} />
        <Route path="/and" element={<App> <And /></App>} />
        <Route path="/nand" element={<App> <Nand /></App>} />
        <Route path="/or" element={<App> <Or /></App>} />
        <Route path="/nor" element={<App> <Nor /></App>} />
        <Route path="/xor" element={<App> <Xor /></App>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

//Remover el loading 
postMessage({ payload: 'removeLoading' }, '*')