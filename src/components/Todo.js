import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeOne, clearTodo } from '../features/todoSlice';

function Todo() {
    const items = useSelector((state) => state.todo.items) // SELECT THE ITEM ARRAY //
    const dispatch = useDispatch() // DISPATCH TO SEND TO THE STORE //
    const [input, setInput] = useState('') // LOCAL STATE SET // 

    const renderItems = items.map((item, index) => <li key={index} onClick={() => dispatch(removeOne(index))}>{item}</li>) /*DISPATCH THE REMOVEONE W THE ITEM INDEX */

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    };

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {renderItems}
            </ul>
            <button onClick={() => dispatch(clearTodo())}>Clear</button>
        </div>
    );
};

export default Todo;