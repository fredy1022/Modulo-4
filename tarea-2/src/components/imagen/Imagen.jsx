import React from 'react';
import './imag.css'

function Image(props) {
  
  return <img src={props.url} alt="Foto de el artista/personaje" />;
}

export default Image;
