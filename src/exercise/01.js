// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'


//FUNCTION: Reducer Function, State Function
// const countReducer = (state, action) => ({
//   ...state, 
//   ...(typeof action === 'function' ? action(state) : action)
// })
//if action is a function or an object


//state.whichever State,    action.whichever State Updator,   action.type = description of dispatch
function countReducer(state, action) {
  switch(action.type) {
    case 'INCREMENT': {
      return {count: state.count + action.step}
    }
    case 'DECREMENT': {
      return {count: state.count - action.step}
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}


function Counter({initialCount = 0, step = 3}) {

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
