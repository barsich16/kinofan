import styles from './Catalog.module.scss';
import image from '../../assets/img/example.jpg';
import { ReactComponent as Arrow } from '../../assets/img/arrow-right.svg';
import Ratio from 'react-ratio';
import { Button } from '../common/Button/Button';
import { useState } from 'react';
import { useGetAllFilmsQuery } from '../../redux/API/filmsAPI';
import { convertMovieType } from '../../helpers/convertMovieType';
import { Link } from 'react-router-dom';

export const Catalog = () => {
	const [limit, setLimit] = useState(10);
	const { data, error, isFetching } = useGetAllFilmsQuery(limit);
	const films = data ? data.docs : [];
	console.log('Films', films);
	console.log('Limit', limit);

	const increaseLimit = () => {
		setLimit((currentLimit) => {
			return currentLimit + 10;
		});
	};

	return (
		<div className={`wrapper ${styles.catalog}`}>
			<div className={styles.header}>
				<h2>Нові фільми</h2>
				<Button className={styles.button}>
					<span>Дивитись усі</span>
				</Button>
			</div>
			<div className={styles.items}>
				{films.map((film) => (
					<div className={styles.item} key={film.id}>
						<Link to={`/film/${film.id}`}>
							<Ratio ratio={2 / 3} className={styles.ratio}>
								<div className={styles.image}>
									<img src={film.poster.url} alt='image' />
									<span>{film.rating.kp.toFixed(1)}</span>
								</div>
							</Ratio>
						</Link>

						<Link to={`/film/${film.id}`}>
							{film.name || film.alternativeName}
						</Link>
						<p>
							{film.year}, {convertMovieType(film.type)}
						</p>
					</div>
				))}
			</div>

			<Button className={styles.more} onClick={increaseLimit}>
				<span>{isFetching ? 'Завантаження...' : 'Показати ще'}</span>
			</Button>
		</div>
	);
};
