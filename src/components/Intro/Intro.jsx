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
				backgroundImage: `url(https://image.tmdb.org/t/p/original${bg}`,
			}}
			className={styles.intro}
		>
			<div className={`${styles.inner} wrapper `}>
				<div className={styles.overview}>
					<h1>{name}</h1>
					{overview && <p>{overview}</p>}
					<Link to={`/movie/${id}`} className='button'>
						<span>Детальніше</span>{' '}
						<Arrow className={styles.arrow} width={16} />
					</Link>
				</div>
			</div>
		</div>
	);
};
