import styles from '../Gallery.module.scss';
import { ReactComponent as FavouritesIcon } from '../../../../assets/img/favourites.svg';
import { Link } from 'react-router-dom';

export const Item = ({ data = {} }) => {
	const {
		shortDescription: desc,
		id,
		name,
		rating,
		year,
		movieLength,
		poster,
	} = data;
	return (
		<div className={styles.item}>
			<div className={styles.left}>
				<Link to={`/film/${id}`} className={styles.poster}>
					<img
						src={
							poster
								? poster.previewUrl || poster.url
								: 'https://place-hold.it/64x96'
						}
						alt=''
					/>
				</Link>
				<div className={styles.info}>
					<Link to={`/film/${id}`} className={styles.link}>
						<h2 className={styles.name}>{name}</h2>
					</Link>

					<span className={styles.year}>{`${year}${
						movieLength ? `, ${movieLength} мин.` : ''
					} `}</span>
					<Link to={`/film/${id}`} className={styles.link}>
						<p className={styles.desc}>{desc}</p>
					</Link>
				</div>
			</div>

			<div className={styles.right}>
				<span
					className={`${styles.rating} ${
						rating.kp > 5 ? styles.rating_green : styles.rating_red
					}`}
				>
					{rating.kp.toFixed(1)}
				</span>
				<button className={`btn ${styles.btn}`}>
					<FavouritesIcon width={15} height={15} className={styles.icon} />
					Буду дивитися
				</button>
			</div>
		</div>
	);
};
