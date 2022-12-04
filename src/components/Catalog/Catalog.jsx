import styles from './Catalog.module.scss';
import Ratio from 'react-ratio';
import { Button } from '../common/Button/Button';
import { useEffect, useState } from 'react';
import { useGetAllFilmsQuery } from '../../redux/API/filmsAPI';
import { convertMovieType } from '../../helpers/convertMovieType';
import { Link } from 'react-router-dom';

export const Catalog = () => {
	const [page, setPage] = useState(1);
	const [films, setFilms] = useState([]);
	const [countForView, setCountForView] = useState(10);
	const { data, error, isFetching } = useGetAllFilmsQuery(page);

	useEffect(() => {
		if (data) {
			setFilms([...films, ...data.results]);
		}
	}, [data]);

	// return <h1>Test</h1>;

	const increaseLimit = () => {
		if (countForView + 10 > page * 20) {
			setPage((currentPage) => {
				return currentPage + 1;
			});
		}
		setCountForView((countForView) => {
			return countForView + 10;
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
				{films.map((film, index) => {
					if (index < countForView) {
						return (
							<div className={styles.item} key={film.id}>
								<Link to={`/film/${film.id}`}>
									<Ratio ratio={2 / 3} className={styles.ratio}>
										<div className={styles.image}>
											<img
												src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
												alt='image'
											/>
											<span>{film.vote_average}</span>
										</div>
									</Ratio>
								</Link>

								<Link to={`/film/${film.id}`}>
									{film.title || film.original_title}
								</Link>
								<p>{film.release_date.slice(0, 4)}</p>
							</div>
						);
					}
				})}
			</div>

			<Button className={styles.more} onClick={increaseLimit}>
				<span>{isFetching ? 'Завантаження...' : 'Показати ще'}</span>
			</Button>
		</div>
	);
};
