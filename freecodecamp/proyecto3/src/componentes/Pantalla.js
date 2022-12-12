import React from "react";
import '../hojas-de-estilo/Pantalla.css'

//input -> sintaxis de desestructuracion

const Pantalla = ({input}) =>(
  <div className="input">
    {input}
  </div>    
);

export default Pantalla;