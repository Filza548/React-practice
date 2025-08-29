import React , {useState} from "react";

// function UseStateConcept (){
//     const [name, setname] = useState("huzaifa")
// function updatename (){
// setname("Filza jameel")
// }

//     return (
//         <div>

// <h3>
//     {name}
// </h3>
// <button onClick={updatename }>Click me </button>
//</div>
//     )
// }

// export default UseStateConcept;


// function UseStateConcept () {

//     const [name , setname] = useState ("filza jameel ")

//     function updation (){
//         setname("Sami jameel ")
//     }
//     return(
//         <div>

//             <h2>{name}</h2>
//             <button onClick={updation}>click me </button>
//         </div>

        
//     )

// }
// export default UseStateConcept;


function UseStateConcept (){
    const [first , nameupdation ] = useState ("filza jameel")

    function updation (){
        nameupdation ("Safia Jameel")
    }

    return (

        <div>
            <h2>{first}</h2>
            <button onClick={updation}>click me </button>
        </div>
    )
}

export default UseStateConcept;