import {
	setFilterRatings,
	setFilterYears,
	setSort,
	setFilterGenre,
	resetFilters,
	setFilterLength,
} from './slices/filtersSlice';
// import { toggleFilters, toggleMenu } from '@/store/reducers/toggle.slice';
import { setPage } from './slices/paginationSlice';
import { setUser, removeUser } from './slices/userSlice';
// import { setSearch, setVisible } from '@/store/reducers/search.slice';

export {
	setFilterRatings,
	setFilterYears,
	setFilterLength,
	setSort,
	setFilterGenre,
	setPage,
	resetFilters,
	setUser,
	removeUser,
};
