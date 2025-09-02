import React, {useRef} from 'react'
import ForwordRefchilld from './ForwordRefchilld'

const ForwordRef = () => {

    const myRef = useRef()

    function ModifyRef (){

myRef.current.value = "filza jameel"
myRef.current.style.backgroundColor = "aqua"
myRef.current.style.color = "black"
myRef.current.focus()

    }

  return (
    <>
    <h1>I'm Practicing ForwordRef-Hook now </h1>

    <ForwordRefchilld ref={myRef} />
    <button onClick={() => ModifyRef()}>Clicked me </button>
    
    </>
  )
}

export default ForwordRef
