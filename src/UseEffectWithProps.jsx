import React, { useEffect, useState } from 'react'

export function UseEffectWithProps() {

  const [age , setAge] = useState (0)
  const [count , setCount ] = useState (22) 

    useEffect(()=>{

        console.log("USEEFFECT HOOKS WITH age",age)
    
    }, [age] )

     useEffect(()=>{

        console.log("USEEFFECT HOOKS WITH age",count)
    
    }, [count] )
  return (
    <>
    
    <h1>UseEffect With props practice </h1>
    <h3>{age}</h3>
    <button onClick={() => setAge (age + 1)}>Update Age</button>
    <h3>{count}</h3>
    <button onClick={ () => setCount (count + 1)}> Update Count </button>    
    </>
  )
}


export function UseEffectWithpropsPractice (prop){

  const [data , setData] = useState ('is the Data being passed or not ')
  const [check , setCheck ] = useState ('is the CHECK being passed or not')

  useEffect (() => {

    console.log("yes, Thats Correct -  the data is coming correctly", data )

  }, [data])


  useEffect (() => {

    console.log("yes, Thats Correct -  the data is coming correctly", check )

  }, [check])

  useEffect (() => {

    console.log("I am sending this prop from the parent to the child", prop.prop)
  }, [prop.prop])


  return (

    <>
    <h1>UseEffect With props practice again & again practice</h1>

<h2>{data}</h2>
    <button onClick={ () => setData( "yes it is being passed")}> Update Data</button>
    
    <h2>{check}</h2>
    <button onClick={ () => setCheck ( "yes it si being passed")}>Update Check</button>

 <h2> Props : {prop.prop}</h2>

    </>


  )

}