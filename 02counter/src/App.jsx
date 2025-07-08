import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    // if(counter===20){
    //   return;
    // }
    // counter = counter + 1
    // setCounter(counter + 1)

    setCounter((prev) => (prev < 20 ? prev + 1 : prev));


    // This updates value only by 1 suppose initial value is 15 then next value will be 16 as it send this state in batches
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    // This updates value only by 1 suppose initial value is 15 then next value will be 16
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
  }

  const removeValue = () => {
    // if(counter ===0){
    //   return;
    // }
    // setCounter(counter-1)
    setCounter((prev) => (prev > 0 ? prev - 1 : prev));
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
