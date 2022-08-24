import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/FormularioComponent.css';
import './assets/styles/bannerStyle.css'
import './assets/styles/cotizadorComponent.css'
import CotizadorComponent from "./components/CotizadorComponent";

//Importamos todos los CSS 
//Llamado al component que contiene todo
function App() {
  return (
    <CotizadorComponent />
  );
}

export default App;
