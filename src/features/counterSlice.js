import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            return { value: state.value + 1 } // REDUCER INCREASES VALUE BY ONE //
        },
        decrement: (state) => {
            return { value: state.value - 1 } // REDUCER DECREASES VALUE BY ONE //
        },
        incrementByAmount: (state, action) => {
            return { value: state.value + action.payload } // REDUCER THAT +/- VALUE SPECIFIED BY USER INPUT(action.payload) //
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;