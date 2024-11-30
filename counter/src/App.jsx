import  { useState } from 'react'

import './App.css'

function App() {
 let [counter , setCounter]= useState(15) 

const addValue =() =>{
  counter = counter + 1;
  setCounter(counter);
  console.log("clicked",counter)
}

  return (
    <>
     <h1>chai or code</h1>
     <h2>counter value : {counter}</h2>
     <button onClick={addValue}
     >Add Value</button>
     <br />
     <button>remove value</button>
    </>
  )
}

export default App
