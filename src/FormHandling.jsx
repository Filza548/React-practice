import React , {useState} from "react";


// first practice is complted 
// function FormHandling (){

//     const [name , setname] = useState("")
//     const [option , setoption] = useState("")
//     const [agree , setagree] = useState(false)

//     function  getForData (e){
//  console.log(name,option,agree)
//         e.preventDefault();

//     }

//     return (
    
//         <div>

//         <form onSubmit={getForData}>
//             <h1>For handling work in React Js</h1>

// <input type="text" placeholder="Enter Your Name" onChange={(e) => setname(e.target.value)}/>
// <br/><br/>

// <select onChange={(e) => setoption(e.target.value)}>
// <option>A</option>
// <option>B</option>
// <option>C</option>
// <option>D</option>
// </select>
// <br/><br/>

// <input type="checkbox" onChange={(e) => setagree(e.target.checked)} />
// <br/><br/>


// <button type="submit"> Submit </button>

//         </form>
//         </div>

//     )

// }





// second practice is complted 

function FormHandling () {

    const [name , setname] = useState ("")
    const [option , setoption] = useState ("")
    const [agree , setagree] = useState (false)

    function getForData (e){
        console.log(name, option, agree)
        e.preventDefault()
    }
    return(
        <div>
            <form onSubmit={getForData}>
<br /><br />

<input type="text" placeholder="Enter Your Name " onChange={(e) => setname(e.target.value)} />
<br /><br />


<select onChange={(e) => setoption(e.target.value)}>
    <option >A</option>
    <option >b</option>
    <option >C</option>
    <option >D</option>
    <option >E</option>
</select>
<br /><br />

<input type="checkbox" onChange={(e) => setagree(e.target.checked)} />
<br /><br />

<button type="submit">Submit</button>


            </form>
        </div>
    )
}













export default FormHandling ;