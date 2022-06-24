import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        ItemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.ItemsInCart.push(action.payload);
        },
        deleteItemFromCart: (state, action) => {
            state.ItemsInCart = state.ItemsInCart.filter(game => game.id !== action.payload.id);
        },
        deleteAllItems: (state, action) => {
            state.ItemsInCart.length = 0;
        }
    }
})

export const {setItemInCart, deleteItemFromCart, deleteAllItems} = cartSlice.actions;
export default cartSlice.reducer;