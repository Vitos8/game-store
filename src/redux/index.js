import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer';
import dataGamesReducer from './dataGames/dataGamesSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        dataGames: dataGamesReducer,
    },
});
