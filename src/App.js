import roches from './imagenes/Fantasmadeloriente.jpg';
import Boton from './componentes/Boton.js';
import './App.css';
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);
 
  const manejarClic = () => {

    setNumClics(numClics + 1);


  }

  const reiniciarContador = () => {

    setNumClics(0);
  }


  return (
    <div className="App">
     <div className='logo-contenedor'>
      <img
      className='roches'
      alt='Roches has ala chh'
      src={roches}
      width={400} />

     </div>

     <div className='contenedor-pepo'>
      <Contador  numClics={numClics} />


      <Boton
      
      texto='Clic'
      esBotonDeClic={true} 
      manejarClic={manejarClic} />



      <Boton
      
      texto='Reiniciar'
      esBotonDeClic={false} 
      manejarClic={reiniciarContador} />
     </div>
    </div>
  );
}

export default App;
