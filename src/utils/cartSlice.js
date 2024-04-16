import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action)=> {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; //makes it empty array []
        },
    },
});

export default cartSlice.reducer;

export const {addItem, removeItem, clearCart} = cartSlice.actions;