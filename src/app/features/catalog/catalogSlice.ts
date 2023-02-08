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
		},
		sortItems: (state, { payload }) => {
			switch (payload) {
				case 'price':
					state.catalogItems = state.catalogItems.sort((a, b) => a.price - b.price);
					break;
				case 'rooms':
					state.catalogItems = state.catalogItems.sort((a, b) => a.roomsCount - b.roomsCount);
					break;
				case 'owner':
					state.catalogItems = state.catalogItems.sort((a, b) => {
						const ownerA = a.owner.name.toLowerCase();
						const ownerB = b.owner.name.toLowerCase();
						return ownerA > ownerB ? -1 : ownerA < ownerB ? 1 : 0;
					});
					break;
				default:
					state.catalogItems = state.catalogItems.sort((a, b) => a.id - b.id);
					break;
			}
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

export const { toggleFavorite, sortItems } = catalogSlice.actions;
export default catalogSlice.reducer;