import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';

const IncDec = () => {
  const [amount, setAmount] = useState(0)
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    function handleIncrement(){
      dispatch(increment())
    }

    function handleDecrement(){
      dispatch(decrement())
    }

    function handleReset(){
      dispatch(reset())
    }

    function handleIncByAmount(){
      dispatch(incrementByAmount(amount))
    }

  return (
    <div>
    <button onClick={handleIncrement}>Increment</button>
    <p>Count : {count}</p>
    <button onClick={handleDecrement}>Decrement</button> <br /> <br />
    <button onClick={handleReset}>Reset</button> <br /> <br />
    <input type="Number" value={amount} placeholder='Enter Amount' onChange={(e)=>setAmount(e.target.value)} />
    <br /> <br />
    <button onClick={handleIncByAmount}>Inc by Amount</button>
    </div>
  )
}

export default IncDec