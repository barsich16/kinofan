import React from 'react';
import { Intro } from '../components/Intro/Intro';
import { Catalog } from '../components/Catalog/Catalog';
import { useGetNewFilmsByTypeQuery } from '../redux/API/filmsAPI';
import { Loader } from '../components/Loader/Loader';

export const Home = () => {
	const { data, isFetching, isLoading } = useGetNewFilmsByTypeQuery({});

	if (isFetching || isLoading) return <Loader />;

	console.log(data);

	return (
		<>
			<Intro data={data} />
			<Catalog type='movie' />
			<Catalog type='tv' />
		</>
	);
};
