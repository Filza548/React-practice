import React, {useMemo, useState} from 'react'

function UseMemoHook() {

  const [count, setCount ] = useState (0)
  const [data, setData ] = useState (2)

  const multiply = useMemo (function multy (){
console.log("multy function for count state")
    return count * 2

  }, [count])

  
  return (
   <>
   <h1>I'm practicing UseMemo now</h1>

   <h2>{count}</h2>
   <h3>{multiply}</h3>
<button onClick={() => setCount (count + 1)}>Update Count</button>

   <h2> {data} </h2>
<button onClick={() => setData (data * 2)}>Update Data</button>
   
   
   </>
  )
}

export default UseMemoHook
