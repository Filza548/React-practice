// import React, { useState, useCallback, memo } from 'react'
// import { UseCallBackChildComponent, Newpractice } from './UseCallBackChildComponent'

// // first Practice

// export const UseCallBackHook = () => {

//   const [count, setCount] = useState(0)
//   const [item, setItem] = useState(2)

//   const newdata = useCallback(() => {

//     console.log("I'm new data function" , item)
//   }, [item])

//   return (
//     <>
//       <h1>I'm practicing UseCallback-Hook now</h1>

//       <h2>count: {count} </h2>
//       <button onClick={() => setCount(count + 1)}>Counter</button>

//       <UseCallBackChildComponent item={item} data={newdata} />
//       <button onClick={() => setItem(count * 2)}> Item</button>

//     </>
//   )
// }


// //Second Practice


// export const AgainPractices = () => {

//   const [victor, setVictor] = useState(0)
//   const [sher, setSher] = useState(3)


//   const newfunc = useCallback(() => {

//     console.log("han han yeah sahii hai ", sher)
//   }, [sher])

//   return (

//     <>
//       <h1>I'm practicing UseCallback-Hook now Again & Again</h1>


//       <h2> Victor : {victor} </h2>
//       <button onClick={() => setVictor(victor + 1)}> Count Victor </button>

//       <Newpractice sher={sher} new={newfunc} />
//       <button onClick={() => setSher(sher * 3)}> Table </button>


//     </>

//   )

// }


import React, { useState, useCallback } from 'react'
import { UseCallBackChildComponent, Newpractice } from './UseCallBackChildComponent'

// First Practice
export const UseCallBackHook = () => {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(2)

  const newdata = useCallback(() => {
    console.log("I'm new data function", item)
  }, [item])

  return (
    <>
      <h1>I'm practicing UseCallback-Hook now</h1>

      <h2>count: {count} </h2>
      <button onClick={() => setCount(count + 1)}>Counter</button>

      <UseCallBackChildComponent item={item} data={newdata} />
      <button onClick={() => setItem(item * 2)}> Table 2 Update </button>
    </>
  )
}

// Second Practice
export const AgainPractices = () => {
  const [victor, setVictor] = useState(0)
  const [sher, setSher] = useState(3)

  const newfunc = useCallback(() => {
    console.log("han han yeah sahii hai", sher)
  }, [sher])

  return (
    <>
      <h1>I'm practicing UseCallback-Hook now Again & Again</h1>

      <h2> Victor : {victor} </h2>
      <button onClick={() => setVictor(victor + 1)}> Count Victor </button>

      <Newpractice sher={sher} newFunc={newfunc} />
      <button onClick={() => setSher(sher * 3)}> table 3 Update  </button>
    </>
  )
}