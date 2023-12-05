import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from '../../features/counter/counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()  
  return (
    <div>
        <button onClick={() => dispatch(inc())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(dec())}>-</button>

    </div>
  )
}

export default Counter