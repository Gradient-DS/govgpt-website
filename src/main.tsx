import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; //  import the router
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/govgpt">  {/*  fix for GitHub Pages */}
    <App />
  </BrowserRouter>
);