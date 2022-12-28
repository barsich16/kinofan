import styles from '../Gallery.module.scss';
import { ReactComponent as FavouritesIcon } from '../../../../assets/img/favourites.svg';
import { Link } from 'react-router-dom';

export const Item = ({ data = {} }) => {
	const {
		overview: desc,
		id,
		title: filmName,
		name: seriesName,
		vote_average: rating,
		release_date: filmDate,
		first_air_date: seriesDate,
		// movieLength,
		poster_path,
	} = data;
	const name = filmName || seriesName;
	const date = filmDate || seriesDate;
	return (
		<div className={styles.item}>
			<div className={styles.left}>
				<Link to={`/movie/${id}`} className={styles.poster}>
					<img
						src={
							`https://image.tmdb.org/t/p/w300${poster_path}` ||
							'https://place-hold.it/64x96'
						}
						alt=''
					/>
				</Link>
				<div className={styles.info}>
					<Link to={`/film/${id}`} className={styles.link}>
						<h2 className={styles.name}>{name}</h2>
					</Link>

					{/*<span className={styles.year}>{`${year}*/}
					{/*${movieLength ? `, ${movieLength} мин.` : ''} */}
					{/*`}</span>*/}
					<span className={styles.year}>{date.slice(0, 4)}</span>
					<Link to={`/film/${id}`} className={styles.link}>
						<p className={styles.desc}>{desc}</p>
					</Link>
				</div>
			</div>

			<div className={styles.right}>
				<span
					className={`${styles.rating} ${
						rating > 5 ? styles.rating_green : styles.rating_red
					}`}
				>
					{rating.toFixed(1)}
				</span>
				<button className={`btn ${styles.btn}`}>
					<FavouritesIcon width={15} height={15} className={styles.icon} />
					Буду дивитися
				</button>
			</div>
		</div>
	);
};
