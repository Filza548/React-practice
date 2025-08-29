import React, {useEffect , useState} from 'react'

function UseEffectHook() {

    const [name , setname ] = useState (0)

    useEffect (()=> {

        console.log("UseEffect hook in react")
    })

  return (
   <>
    
    <h2>hello useEffect Hook</h2>
    <h2>Count : {name}</h2>
    <button onClick={() => setname (name + 1)}>Counter</button>
   
   </>
  )
}

export default UseEffectHook
