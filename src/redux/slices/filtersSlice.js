import { createSlice } from '@reduxjs/toolkit';
import { getCurrentYear } from '../../helpers/getCurrentYear';

const initialState = {
	filters: {
		minYear: '1900-01-01',
		maxYear: `${getCurrentYear()}-12-31`,
		minRating: '0',
		maxRating: '10',
		minLength: 0,
		maxLength: 400,
		genres: '',
		sortBy: 'popularity.desc',
	},
};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilters: (state, action) => {
			const { rating, year, length, sortBy, genre } = action.payload;

			state.filters.minRating = rating[0];
			state.filters.maxRating = rating[1];

			state.filters.minYear = `${year[0]}-01-01`;
			state.filters.maxYear = `${year[1]}-12-31`;

			state.filters.minLength = length[0];
			state.filters.maxLength = length[1];

			state.filters.sortBy = sortBy;
			state.filters.genres = genre;
		},
		resetFilters: (state) => {
			state.filters = initialState.filters;
		},
	},
});

export const { setFilters, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
