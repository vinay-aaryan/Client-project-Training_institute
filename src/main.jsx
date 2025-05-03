import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'; // or wherever your CSS file is
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
// import AboutUs from './components/abooutUs.jsx'
import PortFolio from './portfolio.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)



