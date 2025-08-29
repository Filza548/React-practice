import React , {useState, useEffect} from 'react';
import './App.css'
import {JSX, StartJsx, SecondSum} from './Jsx';
import InlineCode from './ButtonComponent'
import UseStateConcept from'./UseStateConcept'
import {SecondExample, Example} from'./GetInputField'
import ToggleButton from'./ToggleButton'
import FormHandling  from './FormHandling'
import PropsComponent from './PropsComponent'
import FunctionalProps from './FunctionalProps'
import UseEffectHook    from './UseEffect'
import {UseEffectWithProps, UseEffectWithpropsPractice} from './UseEffectWithProps'
import UseMemoHook from './useMemoHook'




// import FuncComponent from './FuncComponent'

function App() {
  const [prop , setProp ] = useState ("I am sending this prop from the parent to the child")

  function getdata (){
    alert("yeah aik functionalpro hai ")
  }

  const [ firstname , setname] = useState ("filza jameel")

  return (
    <div>
      <h2>Hello Everyone.. I have come to practice React for the first time </h2>
      <Firstfile />
      <JSX/>
      <InlineCode/>
      <StartJsx/>
      <SecondSum/>
      <UseStateConcept/>
      {/* <GetInputFieldconcept/> */}
<SecondExample/>
<Example/>

<ToggleButton/>
<FormHandling/>


{/* <PropsComponent name = {"filza jameel"} email = {"filzajameel@gmail.com"}info ={{salary : 6000, mobile :"1234567"}}/>
<PropsComponent name = {"safia jameel"} email = {"safiajameel@gmail.com"} info = {{salary : 1000 ,  mobile : "98765443"}} /> */}
<PropsComponent name = {firstname} />
<button onClick={()=> {setname ("sami jameel")}}> click me </button>

<FunctionalProps data={getdata}/>
<UseEffectHook/>
<UseEffectWithProps/>
<UseEffectWithpropsPractice prop={prop}/>
<button onClick={ () =>  setProp ("Jee jee yeah recive ho raha hai child me ") }>Check Prop </button>

<UseMemoHook/>

     {/* <ButtonComponent/> */}
      {/* <FuncComponent/>
      <FuncComponent/>
      <FuncComponent/> */}
    </div>
  )

  function Firstfile() {
    return (
      <div>
        <h2>
          My Name Is Filza Jameel
        </h2>

        <h3>
          I am practicing in React
        </h3>
      </div>
    )
  }
  
}


export default App;
