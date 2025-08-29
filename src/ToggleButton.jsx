import React ,{useState} from "react";

// example one 
//  function ToggleButton (){

//     const [hide , sethide] = useState (true)
//     return (

//         <div>

// {
//     hide ? <h2>hello Everyone show karwado</h2> : null
// }

// {/* <button onClick={()=> sethide(false)}>hide</button>
// <button onClick={() => sethide (true)}>Show</button> */}

// <button onClick={() => sethide(!hide)}>Toggle</button>
//         </div>
//     ) 

// }


// second example 

// function ToggleButton (){
//     const [show , set] = useState(true)
//     return (

//         <div>
// {
//     show ? <h2>hello everyone kaise hain aap log?</h2> : null 
// }

        

//         <button onClick={() => set(false)}>Hide</button>
//         <button onClick={() => set(true)}>Show</button>
//         </div>
        
//     )
// }


// third example 

function  ToggleButton (){

    const [result , setresult ] = useState(true)
    return (


        <div>

{
    result ?  <h2>han bus sahii hai </h2> : null
}


<button onClick={()=> setresult (!result)}>Toggle</button>
           
        </div>
    )
}

export default ToggleButton;


