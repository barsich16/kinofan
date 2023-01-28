import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	page: 1,
};

export const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setPage: (state, action) => {
			state.page = action.payload;
		},
		resetPage: (state, action) => {
			state.page = initialState.page;
		},
	},
});

export const { setPage, resetPage } = paginationSlice.actions;
export default paginationSlice.reducer;
