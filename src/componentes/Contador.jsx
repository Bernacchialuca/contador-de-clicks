import React from "react";
import '../estilos/Contador.css'

const Contador = ({ numClicks }) => {
  return (
    <div className='contador'>
      {numClicks}
    </div>
  )
}

export default Contador