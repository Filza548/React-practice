// import React, { memo } from 'react'

// export const UseCallBackChildComponent = (props) => {

//     console.log("hello i'm child component", props)
//   return (
//     <div>

//         <h3>Item: {props.item} </h3>
      
//     </div>
//   )
// }

// memo (UseCallBackChildComponent)



// export const Newpractice  = (hello) => {

// console.log("Table", hello)
//   return(

//     <>
    
//     <h1>sher : {hello.sher} </h1>
    
//     </>
//   )
// } 

// memo (Newpractice)



import React, { memo } from 'react'

// Child component 1
export const UseCallBackChildComponent = memo(({ item, data }) => {
  console.log("Table", item)

  return (
    <div>
      <h3>Item: {item} </h3>
      {/* <button onClick={data}>Run Parent Function</button> */}
    </div>
  )
})

// Child component 2
export const Newpractice = memo(({ sher, newFunc }) => {
  console.log("Table", sher)

  return (
    <>
      <h1>sher : {sher} </h1>
      {/* <button onClick={newFunc}>Run Sher Function</button> */}
    </>
  )
})