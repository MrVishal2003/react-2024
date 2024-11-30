import { useState } from 'react'
import './App.css'

function App() {

let [counter, setCounter] = useState(0)

const addValue = () => {
  if (counter === 20) {
    alert("You not allow click more than 20 values 😉");
  } else
  setCounter(counter + 1)
}

const removeValue = () => {
  if (counter === 0) {
    alert("Please click Add value 😊");
  } else {
    setCounter(counter - 1);
  }
}

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>

      <br/>

      <button
      onClick={removeValue}
      >remove value {counter}</button>

      <p>
        Value is: {counter}
      </p>
    
    </>
  )
}

export default App
