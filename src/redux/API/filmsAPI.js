import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = process.env.REACT_APP_API_TOKEN;
console.log(token);
const lang = 'uk';

const formatParams = ({
	first_air_date,
	release_date,
	name,
	title,
	original_name,
	original_title,
	vote_average,
	...item
}) => ({
	...item,
	year: first_air_date?.slice(0, 4) || release_date?.slice(0, 4),
	vote_average: vote_average?.toFixed(1) || 0,
	premier_date: first_air_date || release_date,
	name: name || title,
	original_name: original_name || original_title,
});

const setOnlyParams = (data, withPagination = false) => {
	if (withPagination) {
		return { ...data, results: data.results.map((item) => formatParams(item)) };
	}
	return data.results.map((item) => formatParams(item));
};

export const filmsApi = createApi({
	reducerPath: 'filmsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
	endpoints: (builder) => ({
		getNewFilmsByType: builder.query({
			query: ({ page = 1, type = 'movie' }) =>
				`/discover/${type}?api_key=${token}&page=${page}&language=${lang}&region=RU`,
			transformResponse: (data) => {
				return setOnlyParams(data);
			},
		}),
		getFilmById: builder.query({
			query: ({ id, type }) =>
				`/${type}/${id}?api_key=${token}&language=${lang}`,
			transformResponse: (data) => {
				return formatParams(data);
			},
		}),
		getActors: builder.query({
			query: ({ id, type }) =>
				`/${type}/${id}/credits?api_key=${token}&language=${lang}`,
			transformResponse: (data) => {
				return data.cast;
			},
		}),
		getSimilarMedia: builder.query({
			query: ({ page = 1, type = 'movie', id }) =>
				`/${type}/${id}/similar?api_key=${token}&page=${page}&language=${lang}&language=${lang}`,
			transformResponse: (data) => {
				return setOnlyParams(data);
			},
		}),
		getImages: builder.query({
			query: ({ id, type }) =>
				`/${type}/${id}/images?api_key=${token}&language=${lang}`,
			transformResponse: (data) => {
				return data.posters;
			},
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
			transformResponse: (data) => {
				return setOnlyParams(data, true);
			},
		}),
		getSeries: builder.query({
			query: ({ filters, page }) =>
				`/discover/tv?api_key=${token}&language=${lang}&page=${page}&sort_by=${
					filters.sortBy
				}
				&air_date.gte=${filters.minYear}&air_date.lte=${filters.maxYear}
				&vote_average.gte=${filters.minRating}&vote_average.lte=${filters.maxRating}
				&with_runtime.gte=${filters.minLength}&with_runtime.lte=${filters.maxLength}
				${filters.genres !== '' ? `&with_genres=${filters.genres}` : ''}
				`,
			transformResponse: (data) => {
				return setOnlyParams(data, true);
			},
		}),
		searchMediaByName: builder.query({
			query: (term = '') =>
				`/search/multi?api_key=${token}&language=${lang}&query=${term}&sort_by=popularity.desc`,
			transformResponse: (data) => {
				return setOnlyParams(data);
			},
		}),
	}),
});

export const {
	useGetNewFilmsByTypeQuery,
	useGetFilmByIdQuery,
	useGetActorsQuery,
	useGetSimilarMediaQuery,
	useGetImagesQuery,
	useGetFilmsGenresQuery,
	useGetFilmsQuery,
	useGetSeriesQuery,
	useSearchMediaByNameQuery,
} = filmsApi;
