import styles from './Intro.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Loader } from '../Loader/Loader';
import { FiArrowRight } from 'react-icons/fi';

export const Intro = ({ data }) => {
	const [isImageReady, setIsImageReady] = useState(false);
	const { backdrop_path: bg, name, overview, id } = data[0];
	const image = new Image();
	image.src = `https://image.tmdb.org/t/p/original${bg}`;
	image.onload = () => {
		setIsImageReady(true);
	};

	if (!isImageReady) return <Loader />;
	return (
		<div
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/original${bg}`,
			}}
			className={styles.intro}
		>
			<div className={`${styles.inner} wrapper`}>
				<div className={styles.overview}>
					<h1>{name}</h1>
					{overview && <p>{overview}</p>}
					<Link to={`/movie/${id}`} className={`button ${styles.button}`}>
						<span>Детальніше</span>
						<FiArrowRight className={styles.arrow} />
					</Link>
				</div>
			</div>
		</div>
	);
};
