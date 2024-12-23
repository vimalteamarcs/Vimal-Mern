import React from 'react'
import { useSelector, useDispatch } from 'react-redux'



export default function Counter() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <div>
          <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
    </div>
  )
}