import styles from './Intro.module.scss';
import bg from '../../assets/img/bg1.jpg';
import { ReactComponent as Arrow } from '../../assets/img/arrow-right.svg';
import { Link } from 'react-router-dom';
import {
	useGetLatestMovieQuery,
	useGetNewFilmsByTypeQuery,
} from '../../redux/API/filmsAPI';

export const Intro = () => {
	const { data, error, isFetching } = useGetNewFilmsByTypeQuery({});
	console.log(data);
	if (!data) return <h1>Завантаження...</h1>;
	const { backdrop_path: bg, title, overview, id } = data.results[0];
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
				<h1>{title}</h1>
				<p>{overview}</p>
				<Link to='/film/2' className='button'>
					<span>Детальніше</span> <Arrow className={styles.arrow} width={16} />
				</Link>
			</div>
		</div>
	);
};
