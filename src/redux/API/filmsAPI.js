// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//7S51JR1-HS643R3-NX85FFC-E2XQ220

const token = `7S51JR1-HS643R3-NX85FFC-E2XQ220`;

// Define a service using a base URL and expected endpoints
export const filmsApi = createApi({
	reducerPath: 'filmsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.kinopoisk.dev' }),
	endpoints: (builder) => ({
		getAllFilms: builder.query({
			query: (limit = 10) =>
				`/movie?field=rating.kp&search=1-10&field=year&search=2022&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${token}`,
		}),
		getFilmById: builder.query({
			query: (id) => `/movie?token=${token}&search=${id}&field=id`,
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllFilmsQuery, useGetFilmByIdQuery } = filmsApi;
