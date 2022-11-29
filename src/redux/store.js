import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './slices/filtersSlice';
// import { setupListeners } from '@reduxjs/toolkit/query';
import { filmsApi } from './API/filmsAPI';
import { paginationReducer } from './slices/paginationSlice';

export const store = configureStore({
	reducer: {
		[filmsApi.reducerPath]: filmsApi.reducer,
		filters: filtersReducer,
		pagination: paginationReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(filmsApi.middleware),
});
