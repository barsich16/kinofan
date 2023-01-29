import { useGetActorsQuery } from '../../../redux/API/filmsAPI';
import styles from './Actors.module.scss';
import Ratio from 'react-ratio';
import { Carousel } from '../../Swiper/Swiper';
import Skeleton from 'react-loading-skeleton';
import { NoImage } from '../../common/NoImage/NoImage';

export const Actors = ({ mediaId: id, mediaType: type }) => {
	const { data, isFetching } = useGetActorsQuery({ id, type });

	const actors = isFetching
		? new Array(5).fill().map((_, index) => <SkeletonCard key={index} />)
		: data.map(({ id, name, character, profile_path }) => (
				<Card key={id} photo={profile_path} name={name} character={character} />
		  ));

	return <Carousel items={actors} />;
};

const Card = ({ photo, name, character }) => {
	return (
		<div className={styles.card}>
			<Ratio ratio={2 / 3} className={styles.ratio}>
				<div className={styles.img_block}>
					{photo ? (
						<img
							className={styles.image}
							src={`https://image.tmdb.org/t/p/w300${photo}`}
							alt={name}
						/>
					) : (
						<NoImage />
					)}
				</div>
			</Ratio>
			<p className={styles.name}>{name}</p>
			<p className={styles.character}>{character}</p>
		</div>
	);
};

const SkeletonCard = () => {
	return (
		<div className={styles.card}>
			<Ratio ratio={2 / 3} className={styles.ratio}>
				<div className={styles.img_block}>
					<Skeleton height='100%' />
				</div>
			</Ratio>
			<p className={styles.name}>
				<Skeleton />
			</p>
			<p className={styles.character}>
				<Skeleton />
			</p>
		</div>
	);
};
