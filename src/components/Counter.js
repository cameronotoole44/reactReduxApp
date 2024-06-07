import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../features/counterSlice';

function Counter() {
    const count = useSelector((state) => state.counter.value) // SELECT COUNT VALUE FROM STATE // 
    const dispatch = useDispatch() // TO SEND ACTIONS TO THE STORE // 
    const [input, setInput] = useState(0) // LOCAL STATE FOR INPUT VALUE // 

    const byAmount = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input))) // DISPATCH ACTION WITH INPUT VALUE //
    };

    return (
        <div>
            <h1>{count}</h1>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}> {/*DISPATCH INCREMENT ACTION*/}
                Increment
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}> {/*DISPATCH DECREMENT ACTION */}
                Decrement
            </button>
            <form onSubmit={(e) => byAmount(e)}>
                <input type="number" onChange={(e) => setInput(e.target.value)} />{/*UPDATES LOCAL STATE W INPUT VALUE */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Counter;