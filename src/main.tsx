import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CalculatorLayout from './pages/Calculator';

import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<CalculatorLayout />} />
      <Route path="/" element={<CalculatorLayout />} />
    </Routes>
  </BrowserRouter>
);

//Remover el loading 
postMessage({ payload: 'removeLoading' }, '*')