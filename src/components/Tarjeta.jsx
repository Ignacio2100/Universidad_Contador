import React from 'react'

function Tarjeta({imagen, titulo, descripcion}) {

  return (

    
    <div className="card">
      <img
        src={imagen}
        alt="Avatar"
        className="avatar"
      />
      <div className="card-content">
        <h1 className="name">{titulo}</h1>
        <p className="description">{descripcion}</p>
      </div>
    </div>  
     
  )
}

export default Tarjeta


