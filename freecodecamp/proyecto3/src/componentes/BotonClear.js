import '../hojas-de-estilo/BotonClear.css'

//se puede prescindir de llamar a react y seguira funcionando igual

const BotonClear = (props) => (
    <div className="boton-clear" 
         onClick={props.manejarClear}>
          {props.children}
    </div>
);

export default BotonClear;