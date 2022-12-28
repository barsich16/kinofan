import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import Ratio from 'react-ratio';

export const Card = ({ type, item }) => {
	const {
		id,
		vote_average: vote,
		poster_path: poster,
		name,
		original_name,
		year,
	} = item;
	console.log(item);
	return (
		// <div className={styles.item} key={id}>
		<div className={styles.item}>
			<Link to={`/${type}/${id}`}>
				<Ratio ratio={2 / 3} className={styles.ratio}>
					<div className={styles.image}>
						<img src={`https://image.tmdb.org/t/p/w300${poster}`} alt='image' />
						<span className={styles.vote}>{vote}</span>
					</div>
				</Ratio>
			</Link>

			<Link to={`/${type}/${id}`}>{name || original_name}</Link>
			<p>{year}</p>
		</div>
	);
};
