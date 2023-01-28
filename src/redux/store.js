import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './slices/filtersSlice';
import userReducer from './slices/userSlice';
import paginationReducer from './slices/paginationSlice';
import { filmsApi } from './API/filmsAPI';

export const store = configureStore({
	reducer: {
		[filmsApi.reducerPath]: filmsApi.reducer,
		filters: filtersReducer,
		pagination: paginationReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(filmsApi.middleware),
});
