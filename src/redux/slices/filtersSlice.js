import { createSlice } from '@reduxjs/toolkit';
import { getCurrentYear } from '../../helpers/getCurrentYear';

const initialState = {
	filters: {
		year: `1960-${getCurrentYear()}`,
		rating: '1-10',
		sortByRelease: '-1',
		genre: '',
	},
	filters2: {
		minYear: '1900-01-01',
		maxYear: `${getCurrentYear()}-12-31`,
		minRating: '0',
		maxRating: '10',
		with_genres: '',
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
			console.log(state);
			//TODO: добавити рік по шаблону з місяцем, й так само до остальних
			state.filters.minYear = action.payload;
			state.filters.year = action.payload;
		},
		setFilterRatings: (state, action) => {
			state.filters.rating = action.payload;
		},
		setSortByRelease: (state, action) => {
			state.filters.sortByRelease = action.payload;
		},
		setFilterGenre: (state, action) => {
			state.filters.genre = action.payload;
		},
		resetFilters: (state) => {
			state.filters = initialState.filters;
		},
	},
});

export const {
	setFilterYears,
	setFilterRatings,
	setSortByRelease,
	setFilterGenre,
	resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
