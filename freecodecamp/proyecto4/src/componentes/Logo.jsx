import '../hojas-de-estilo/Logo.css'
import fCCLogo from '../imagenes/freecodecamp-logo.png'

const Logo = () => (
  <div className='freecodecamp-logo-contenedor'>
    <img 
    src={fCCLogo}
    className='freecodecamp-logo'
    alt={'Logo freeCodeCamp'} />
  </div>
);


export default Logo;