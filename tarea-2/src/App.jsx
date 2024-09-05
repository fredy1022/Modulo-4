import React from 'react';
import Title from './components/Titulo/Titulo';
import Image from './components/imagen/Imagen';
import Details from './components/detalles/details';

function App() {
  return (
    <div className="container">
      <div className="imag">
        <Image url="./Snarf.webp" />
      </div>

      <Title title="Snarf" />

      <Details genre="Masculino" status="Vivo" />
    </div>
  );
}

export default App;