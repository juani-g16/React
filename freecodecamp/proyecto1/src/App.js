import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio'
import Data from './data/Data-testimonios'


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className='contenedor-principal'>
          <h1>Here is what our alumni say about freeCodeCamp:</h1>
          <Testimonio 
            nombre={`${Data.shawn.nombre}`}
            pais={`${Data.shawn.pais}`}
            imagen={`${Data.shawn.imagen}`}
            alt={`${Data.shawn.alt}`}
            cargo={`${Data.shawn.cargo}`}
            empresa={`${Data.shawn.empresa}`}
            testimonio={`${Data.shawn.testimonio}`}/>
          <Testimonio 
            nombre={`${Data.sarah.nombre}`}
            pais={`${Data.sarah.pais}`}
            imagen={`${Data.sarah.imagen}`}
            alt={`${Data.sarah.alt}`}
            cargo={`${Data.sarah.cargo}`}
            empresa={`${Data.sarah.empresa}`}
            testimonio={`${Data.sarah.testimonio}`}/>
          <Testimonio 
            nombre={`${Data.emma.nombre}`}
            pais={`${Data.emma.pais}`}
            imagen={`${Data.emma.imagen}`}
            alt={`${Data.emma.alt}`}
            cargo={`${Data.emma.cargo}`}
            empresa={`${Data.emma.empresa}`}
            testimonio={`${Data.emma.testimonio}`}/>
          </div>
      </div>
    );
  }
}

export default App;
