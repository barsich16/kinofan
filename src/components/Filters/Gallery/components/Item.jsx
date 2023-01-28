import styles from '../Gallery.module.scss';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { FiBookmark } from 'react-icons/fi';
import { NoImage } from '../../../common/NoImage/NoImage';

export const Item = ({ data = {}, type }) => {
	const {
		overview: desc,
		id,
		name,
		vote_average: rating,
		year: date,
		poster_path,
	} = data;

	return (
		<div className={styles.item}>
			<div className={styles.left}>
				<Link to={`/${type}/${id}`} className={styles.poster}>
					{poster_path ? (
						<img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt='' />
					) : (
						<NoImage />
					)}
				</Link>
				<div className={styles.info}>
					<Link to={`/${type}/${id}`} className={styles.link}>
						<h2 className={styles.name}>{name}</h2>
					</Link>
					<span className={styles.year}>{date}</span>
					<Link to={`/${type}/${id}`} className={styles.link}>
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
					{rating}
				</span>
				<button className={`${styles.btn}`}>
					<FiBookmark className={styles.icon} />
					<span>Буду дивитися</span>
				</button>
			</div>
		</div>
	);
};

export const SkeletonItem = () => {
	return (
		<div className={styles.item}>
			<div className={styles.left}>
				<div className={styles.poster}>
					<Skeleton height='100%' />
				</div>
				<div className={styles.info}>
					<div className={styles.link}>
						<h2 className={styles.name}>
							<Skeleton width='200px' />
						</h2>
					</div>
					<span className={styles.year}>
						<Skeleton width='80px' />
					</span>
					<div className={styles.link}>
						<p className={styles.desc}>
							<Skeleton width='250px' />
						</p>
					</div>
				</div>
			</div>

			<div className={styles.right}>
				<span className={styles.rating}>
					<Skeleton width='20px' />
				</span>
				<button className={styles.btn}>
					<FiBookmark className={styles.icon} />
					<span>Буду дивитися</span>
				</button>
			</div>
		</div>
	);
};
