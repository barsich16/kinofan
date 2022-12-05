import { createSlice } from '@reduxjs/toolkit';
import { getCurrentYear } from '../../helpers/getCurrentYear';

const initialState = {
	// filters: {
	// 	year: `1960-${getCurrentYear()}`,
	// 	rating: '1-10',
	// 	sortByRelease: '-1',
	// 	genre: '',
	// },
	filters: {
		minYear: '1900-01-01',
		maxYear: `${getCurrentYear()}-12-31`,
		minRating: '0',
		maxRating: '10',
		minLength: 0,
		maxLength: 400,
		genres: '',
		// year: `1960-${getCurrentYear()}`,
		// rating: '1-10',
		// sortByRelease: '-1',
		// genre: '',
	},
};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilterYears: (state, action) => {
			// console.log(state);
			state.filters.minYear = `${action.payload[0]}-01-01`;
			state.filters.maxYear = `${action.payload[1]}-12-31`;
		},
		setFilterRatings: (state, action) => {
			state.filters.minRating = action.payload[0];
			state.filters.maxRating = action.payload[1];
		},
		setFilterLength: (state, action) => {
			console.log(action);
			state.filters.minLength = action.payload[0];
			state.filters.maxLength = action.payload[1];
		},
		// setSortByRelease: (state, action) => {
		// 	state.filters.sortByRelease = action.payload;
		// },
		setFilterGenre: (state, action) => {
			state.filters.genres = action.payload;
		},
		resetFilters: (state) => {
			state.filters = initialState.filters;
		},
	},
});

export const {
	setFilterYears,
	setFilterRatings,
	setFilterLength,
	// setSortByRelease,
	setFilterGenre,
	resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
