import React, { memo } from 'react'

export const UseCallBackChildComponent = (props) => {

    console.log("hello i'm child component", props)
  return (
    <div>

        <h3>Item: {props.item} </h3>
      
    </div>
  )
}

memo (UseCallBackChildComponent)



export const Newpractice  = (hello) => {

console.log("Table", hello)
  return(

    <>
    
    <h1>sher : {hello.sher} </h1>
    
    </>
  )
} 

memo (Newpractice)