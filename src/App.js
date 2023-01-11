import './App.css';
import logoReact from './imagenes/reacticon.png'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador';
import { useState } from 'react';


const App = () => {

  const [numClicks, setNumClicks] = useState(0)

  const manejarClick = () => {
    setNumClicks(numClicks + 1)
  }

  const reiniciarContador = () => {
    setNumClicks(0)
  }

  return (
    <div className='App'>
       <div className='react-logo-contenedor'>
        <h1>CONTADOR DE CLICKS CON REACT</h1>
        <img className='react-logo' src={logoReact} alt='react-logo'/>
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClicks = {numClicks}
          />
        <Boton
          texto='Click' 
          esBotonDeClick={true}
          manejarClick = {manejarClick}
          />
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick = {reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
