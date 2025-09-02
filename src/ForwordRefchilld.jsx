import React, {forwardRef} from 'react'

const ForwordRefchilld = (props, ref ) => {
  return (
  <>
  <h3>Child ForwardRef</h3>
  <input type="text" ref={ref} />
  
  
  </>
  )
}

export default forwardRef (ForwordRefchilld)
