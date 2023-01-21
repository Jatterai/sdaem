import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TCalalogSlice } from "../../../types";

const url = 'http://localhost:3000/apartments';
export const getCatalogItems = createAsyncThunk('cart/getCatalogItems', () => {
	return axios.get(url).then(res => res.data);
})

const initialState: TCalalogSlice = {
	catalogItems: [],
	isLoading: true,
}

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		toggleFavorite: (state, action) => {
			state.catalogItems = state.catalogItems
				.map(el => el.id === action.payload ? ({ ...el, isFavorite: !el.isFavorite }) : el)
		}
	},
	extraReducers: {
		//@ts-ignore
		[getCatalogItems.pending]: (state) => {
			state.isLoading = true;
		},
		//@ts-ignore
		[getCatalogItems.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.catalogItems = action.payload
		},
		//@ts-ignore
		[getCatalogItems.rejected]: (state) => {
			state.isLoading = false;
		}
	}
})

export const { toggleFavorite } = catalogSlice.actions;
export default catalogSlice.reducer;