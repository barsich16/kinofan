import { resetFilters, setFilters } from './slices/filtersSlice';
import { setPage, resetPage } from './slices/paginationSlice';
import {
	setUser,
	removeUser,
	loginThunk,
	registerThunk,
	logoutThunk,
} from './slices/userSlice';

export {
	setFilters,
	setPage,
	resetPage,
	resetFilters,
	setUser,
	removeUser,
	loginThunk,
	logoutThunk,
	registerThunk,
};
