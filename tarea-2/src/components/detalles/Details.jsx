import React from 'react'
import './Detalles.css'

const Details = (props) => {
  return (
    <div>
      <p>{props.genre}</p>
      <p>{props.status}</p>
    </div>
  )
}

export default Details