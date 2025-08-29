import React from 'react'

function FunctionalProps(prop) {
  return (
    <div>

      <button onClick={prop.data}>get your data</button>
      
    </div>
  )
}

export default FunctionalProps;
