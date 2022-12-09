// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//7S51JR1-HS643R3-NX85FFC-E2XQ220

// const token = `7S51JR1-HS643R3-NX85FFC-E2XQ220`;
const token = `3476d1bc83c6bc8c007c8a4a07d8968a`;
const lang = 'uk';

// Define a service using a base URL and expected endpoints
// export const filmsApi = createApi({
// 	reducerPath: 'filmsApi',
// 	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.kinopoisk.dev' }),
// 	endpoints: (builder) => ({
// 		getAllFilms: builder.query({
// 			query: (limit = 10) =>
// 				`/movie?field=rating.kp&search=1-10&field=year&search=2022&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${token}`,
// 		}),
// 		getFilmById: builder.query({
// 			query: (id) => `/movie?token=${token}&search=${id}&field=id`,
// 		}),
// 		// getFilmByFilters: builder.query({
// 		// 	query: (params) => {
// 		// 		const { rating, year, genres, sort } = params;
// 		// 		const ratingString = `${rating[0]}-${rating[1]}`;
// 		// 		const yearString = `${year[0]}-${year[1]}`;
// 		// 		const ratings = rating[0] !== rating[1] ? ratingString : rating[0];
// 		// 		const years = year[0] !== year[1] ? yearString : year[0];
// 		// 		const genre =
// 		// 			genres.value !== ''
// 		// 				? `search[]=${genres.value}&field[]=genres.name`
// 		// 				: '';
// 		// 		return `/movie?token=${token}&search=${id}&field=id`;
// 		// 	},
// 		// }),
// 		getCartoons: builder.query({
// 			query: ({ filters, page }) =>
// 				`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=3&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${token}`,
// 		}),
// 		getFilms: builder.query({
// 			query: ({ filters, page }) =>
// 				`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=2&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${token}`,
// 		}),
// 		getSeries: builder.query({
// 			query: ({ filters, page }) =>
// 				`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${token}`,
// 		}),
// 		getInfo: builder.query({
// 			query: ({ filters, page, type }) =>
// 				`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=${type}&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${token}`,
// 		}),
// 	}),
// });

export const filmsApi = createApi({
	reducerPath: 'filmsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
	endpoints: (builder) => ({
		getNewFilmsByType: builder.query({
			query: ({ page = 1, type = 'movie' }) =>
				`/${type}/popular?api_key=${token}&page=${page}&language=${lang}`,
		}),

		getFilmById: builder.query({
			query: ({ id, type }) =>
				`/${type}/${id}?api_key=${token}&language=${lang}`,
		}),
		getLatestMovie: builder.query({
			query: () => `/movie/latest?api_key=${token}&language=${lang}`,
		}),
		getFilmsGenres: builder.query({
			query: (type) => `/genre/${type}/list?api_key=${token}&language=${lang}`,
			transformResponse: (data) => {
				return data.genres.map((genre) => ({
					label: genre.name,
					value: genre.id,
				}));
			},
		}),
		getFilms: builder.query({
			query: ({ filters, page }) =>
				`/discover/movie?api_key=${token}&language=${lang}&page=${page}&sort_by=${
					filters.sortBy
				}
				&release_date.gte=${filters.minYear}&release_date.lte=${filters.maxYear}
				&vote_average.gte=${filters.minRating}&vote_average.lte=${filters.maxRating}
				&with_runtime.gte=${filters.minLength}&with_runtime.lte=${filters.maxLength}
				${filters.genres !== '' ? `&with_genres=${filters.genres}` : ''}
				`,
		}),
		getSeries: builder.query({
			query: ({ filters, page }) =>
				`/discover/tv?api_key=${token}&language=${lang}&page=${page}&sort_by=${
					filters.sortBy
				}
				&release_date.gte=${filters.minYear}&release_date.lte=${filters.maxYear}
				&vote_average.gte=${filters.minRating}&vote_average.lte=${filters.maxRating}
				&with_runtime.gte=${filters.minLength}&with_runtime.lte=${filters.maxLength}
				${filters.genres !== '' ? `&with_genres=${filters.genres}` : ''}
				`,
		}),
		searchMedia: builder.query({
			query: (term = '') =>
				`/search/multi?api_key=${token}&language=${lang}&query=${term}`,
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

		// getSeries: builder.query({
		// 	query: ({ filters, page }) =>
		// 		`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${token}`,
		// }),
		getInfo: builder.query({
			query: ({ filters, page, type }) =>
				`/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=${type}&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${token}`,
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetNewFilmsByTypeQuery,
	useGetFilmByIdQuery,
	useGetFilmsQuery,
	useGetLatestMovieQuery,
	useSearchMediaQuery,
	// useGetCartoonsQuery,
	// useGetFilmsQuery,
	useGetFilmsGenresQuery,
	useGetSeriesQuery,
	// useGetInfoQuery,
} = filmsApi;
