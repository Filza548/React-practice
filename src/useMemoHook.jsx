import React, {useMemo, useState} from 'react'

 export function UseMemoHook() {

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


export function UseMemoHookpractice () {

const [practice , SetPractice] = useState (0)
const [bus , SetBus] = useState (3)


const okay = useMemo (() =>{
console.log("han yeah bhi return ho raha hai ")
  return bus * 3
  
}, [bus])


  return(

<>

<h1>Again & Again Practice UseMemo </h1>

<h2> {practice} </h2>
<button onClick={() => SetPractice (practice + 1)}> update Practice</button>

<h2> {bus} </h2>
<h2> {okay} </h2>
<button onClick={() => SetBus (bus * 3)}> update table</button>


</>


  )

}
