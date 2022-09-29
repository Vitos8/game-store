import { createSlice } from "@reduxjs/toolkit";

const dataGamesSlice= createSlice({
     name: "dataGames",
     initialState: {
          data: [],
     },
     reducers: {
		setDataGames: (state, action) => {
			state.data = [...action.payload];
		}, 
		changeInCartValue: (state, action) => {
			state.data = state.data.map((item) => {
				if(item.id === action.payload) {
					item.inCart = !item.inCart;
					return item;
				}
				return item;
			});
		}
     },
});

export const { setDataGames, changeInCartValue } = dataGamesSlice.actions;
export default dataGamesSlice.reducer;
