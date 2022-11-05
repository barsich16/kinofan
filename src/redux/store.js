import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './slices/filmsSlice';
// import { setupListeners } from '@reduxjs/toolkit/query';
import { filmsApi } from './API/filmsAPI';

export const store = configureStore({
	reducer: {
		[filmsApi.reducerPath]: filmsApi.reducer,
		films: filmsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(filmsApi.middleware),
});
