import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

export const todoSlice = createSlice({
    name: 'todo', // NAME THE STRING // 
    initialState, // SET STATE // 
    reducers: {
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload] } // TAKES CURRENT STATE&ACTION(the new todo item) RETURNS NEW STATE W UPDATED ARRAY //
        },
        removeOne: (state, action) => {
            console.log(action) // LOGS ACTION FOR DEBUGGIN -.- // 
            let array = [...state.items] // COPY CURRENT ARRAY //
            let index = action.payload // GETS INDEX OF ITEM TO REMOVE // 
            if (index !== -1) {
                array.splice(index, 1) // REMOVE THE ITEM IN THE SPECIFIED INDEX //
                return { items: array } // RETURN UPDATED STATE // 
            }
        },
        clearTodo: () => {
            return { items: [] } // REDUCER THAT SETS THE ITEMS ARRAY TO AN EMPTY ONE // 
        }
    }
});

export const { addTodo, removeOne, clearTodo } = todoSlice.actions;

export default todoSlice.reducer;
