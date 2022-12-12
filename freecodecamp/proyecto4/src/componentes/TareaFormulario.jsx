import { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css'
import {v4 as uuidv4} from 'uuid'


function TareaFormulario (props) {

  const [input,setInput] = useState('');

  const manejarCambio = e => {//Evento que maneja el cambio de contenido en el formulario
    setInput(e.target.value); //Extrae valor del campo de texto ingresado por usuario
  }

  const manejarEnvio = e => {//Evento que maneja el envio del formulario
    e.preventDefault(); //Evita que se recargue la pantalla cuando se envia el formulario

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva);
  }
  return (
    <form 
      className="tarea-formulario"
      onSubmit={manejarEnvio}>
        <input
          className="tarea-input"
          type='text'
          placeholder='Escribe una tarea'
          name='texto'
          onChange={manejarCambio}
        />
        <button className='tarea-boton'>
          Agregar Tarea
        </button>
    </form>
  );
};

export default TareaFormulario;