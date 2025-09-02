// import React, {useRef} from 'react'

//first Practice

// const UseRefHook = () => {

//     let myref = useRef()

//      function modifyInput (){

// console.log(myref.current.value)

//     }

//   return (

   

//     <>
    
//     <h1>I'm Practicing UseRef-hook Now </h1>
    
//     <input type="text" ref={myref} />
//     <br />
//     <button onClick={() => modifyInput()}> Clicked me  </button>
    
    
//     </>


//   )
// }

// export default UseRefHook



import React , {useRef} from "react";

// Second Practice

const UseRefHook = () => {

    let userf = useRef ();

    function edit () {


    }


    return(


        <>

        <h1>I'm practicing UseRef-Hook Now</h1>
        <input type="text" ref={userf} />
        <br />

        <button onClick={() => edit()}>Clicked me </button>
        
        
        </>
    )





}


export default UseRefHook