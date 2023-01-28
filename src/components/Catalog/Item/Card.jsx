import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import Ratio from 'react-ratio';
import { NoImage } from '../../common/NoImage/NoImage';

export const Card = ({ type, item }) => {
	const {
		id,
		vote_average: vote,
		poster_path: poster,
		name,
		original_name,
		year,
	} = item;

	return (
		<div className={styles.item}>
			<Link to={`/${type}/${id}`}>
				<Ratio ratio={2 / 3} className={styles.ratio}>
					<div className={styles.img_block}>
						{poster ? (
							<img
								src={`https://image.tmdb.org/t/p/w300${poster}`}
								alt='image'
							/>
						) : (
							<NoImage />
						)}
						<span className={styles.vote}>{vote}</span>
					</div>
				</Ratio>
			</Link>
			<Link to={`/${type}/${id}`} className={styles.name}>
				{name || original_name}
			</Link>
			<p>{year}</p>
		</div>
	);
};
