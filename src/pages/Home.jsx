import React from 'react';
import { Intro } from '../components/Intro/Intro';
import { Catalog } from '../components/Catalog/Catalog';
import { useGetNewFilmsByTypeQuery } from '../redux/API/filmsAPI';
import { Loader } from '../components/Loader/Loader';

export const Home = () => {
	const { data, error, isFetching, isLoading } = useGetNewFilmsByTypeQuery({});

	if (isFetching || isLoading) return <Loader />;

	return (
		<>
			<Intro data={data} />
			<Catalog type='movie' />
			<Catalog type='tv' />
		</>
	);
};
