// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

//Creating Context
const CountContext = React.createContext()  

//Context Provider Function
function CountProvider(props) {
  const [count, setCount] = React.useState(0) //Creating Unifying State
  const value = [count, setCount] //object that holds state declarations
  return <CountContext.Provider value={value} {...props} />
}

function useCount() {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error(`useCount must be used within the CountProvider`)
  }
  return context
}


function CountDisplay() {
  const [count] = useCount()  //Were getting the value(state declaations), from the COntext Provider
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()   //Order matters Deconstruturing, just need setCount
  //const setCount = () => {}
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
