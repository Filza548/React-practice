import React, { useState } from "react";

// jo hum input field me likhen woh samne bhi wesai hii show ho raha ho 

// function GetInputFieldconcept (){
// const [data ,  setdata] = useState(null);
// function getValue (val) {
//     //   console.log(val.target.value)
//     setdata(val.target.value)

// }
// return(

//     <div>
//         <h2>{data}</h2>
//         <input type="text" onChange={getValue}/>
//     </div>
// )
// }
// export default GetInputFieldconcept;


 export function SecondExample() {
    const [data, setdata] = useState(null)
    const [print, setprint] = useState(false)
    function getvalue(val) {
        setdata(val.target.value)
        setprint(false)
    }

    return (
        <div>

            {
                print ?
                    <h2>{data}</h2>
                    : null
            }
     


            <input type="text" onChange={getvalue}/>
            <button onClick={() => setprint(true)}>display</button>
        </div>
    )
}





// export function Example() {
//     const [data, setdata] = useState (null)
//     const [print , setPrint] = useState (false)

//     function getvalue (val){
//         setdata(val.target.value)
//         setPrint(false)
//     }

//     return(
//         <div>

//             {
//                 print ?
//                 <h2>{data}</h2>
//                 : null 

//             }
        
//         <input type="text" onChange={getvalue} />
//         <button onClick={()=> setPrint(true)}>Show</button>
//         </div>
//     )
// }



export function  Example (){

    const [result , setresult ] = useState(null)
    const [ display , setdisplay] = useState (false)

    function getvalue (val){
        setresult(val.target.value)
        setdisplay (false)
    }


    return (

       

        <div>
             {
            display ? <h3>{result}</h3> : null 
        }

        <input type="text" onChange={getvalue}/>

        <button onClick={() => setdisplay(true)}>kaka</button>
           
        </div>
        
    )



}


