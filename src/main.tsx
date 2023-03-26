import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import "./i18n"

const root = createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

//Remover el loading 
postMessage({ payload: 'removeLoading' }, '*')