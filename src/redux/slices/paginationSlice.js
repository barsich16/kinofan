import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	page: 1,
};

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setPage: (state, action) => {
			console.log(state);
			state.page = action.payload;
		},
	},
});

export const { setPage } = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;
