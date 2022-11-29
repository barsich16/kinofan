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
		// getFilmByFilters: builder.query({
		// 	query: (params) => {
		// 		const { rating, year, genres, sort } = params;
		// 		const ratingString = `${rating[0]}-${rating[1]}`;
		// 		const yearString = `${year[0]}-${year[1]}`;
		// 		const ratings = rating[0] !== rating[1] ? ratingString : rating[0];
		// 		const years = year[0] !== year[1] ? yearString : year[0];
		// 		const genre =
		// 			genres.value !== ''
		// 				? `search[]=${genres.value}&field[]=genres.name`
		// 				: '';
		// 		return `/movie?token=${token}&search=${id}&field=id`;
		// 	},
		// }),
		getCartoons: builder.query({
			query: ({ filters, page }) =>
				`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=3&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${token}`,
		}),
		getFilms: builder.query({
			query: ({ filters, page }) =>
				`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=2&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${token}`,
		}),
		getSeries: builder.query({
			query: ({ filters, page }) =>
				`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${token}`,
		}),
		getInfo: builder.query({
			query: ({ filters, page, type }) =>
				`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=${type}&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${token}`,
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetAllFilmsQuery,
	useGetFilmByIdQuery,
	useGetCartoonsQuery,
	useGetFilmsQuery,
	useGetSeriesQuery,
	useGetInfoQuery,
} = filmsApi;
