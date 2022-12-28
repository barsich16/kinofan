import styles from './Intro.module.scss';
import { ReactComponent as Arrow } from '../../assets/img/arrow-right.svg';
import { Link, useLoaderData } from 'react-router-dom';
import {
	useGetLatestMovieQuery,
	useGetNewFilmsByTypeQuery,
} from '../../redux/API/filmsAPI';
import { useState } from 'react';
import { Loader } from '../Loader/Loader';

export const Intro = ({ data }) => {
	// const { data, error, isFetching } = useGetNewFilmsByTypeQuery({});
	console.log(data);
	const [isImageReady, setIsImageReady] = useState(false);
	const { backdrop_path: bg, name, overview, id } = data[0];
	const test = new Image();
	test.src = `https://image.tmdb.org/t/p/original${bg}`;
	test.onload = () => {
		setIsImageReady(true);
	};
	console.log(test);

	if (!isImageReady) return <Loader />;
	// console.log(film);
	return (
		<div
			style={{
				background: `center 20% / cover no-repeat url(${
					`https://image.tmdb.org/t/p/original${bg}` ||
					'https://place-hold.it/64x96'
				})`,
				height: 'calc(100vh - 70px)',
			}}
		>
			<div className={`wrapper ${styles.inner}`}>
				<h1>{name}</h1>
				<p>{overview}</p>
				<Link to={`/movie/${id}`} className='button'>
					<span>Детальніше</span> <Arrow className={styles.arrow} width={16} />
				</Link>
			</div>
		</div>
	);
};
