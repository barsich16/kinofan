import { useGetActorsQuery } from '../../../redux/API/filmsAPI';
import styles from './Actors.module.scss';
import Ratio from 'react-ratio';
import { Carousel } from '../../Swiper/Swiper';
import { ReactComponent as Avatar } from '../../../assets/img/avatar.svg';
const Card = ({ photo, name, character }) => {
	return (
		<div className={styles.card}>
			<Ratio ratio={2 / 3} className={styles.ratio}>
				<div className={styles.image}>
					{photo ? (
						<img
							className={styles.avatar}
							src={`https://image.tmdb.org/t/p/w300${photo}`}
							alt='image'
						/>
					) : (
						<Avatar className={styles.avatar} />
					)}
				</div>
			</Ratio>
			<p className={styles.name}>{name}</p>
			<p className={styles.character}>{character}</p>
		</div>
	);
};

export const Actors = ({ mediaId: id, mediaType: type }) => {
	const { data, error, isFetching } = useGetActorsQuery({ id, type });
	if (!data) return 'загрузка';
	console.log(data);

	const actors = data.map(({ id, name, character, profile_path }) => (
		<Card key={id} photo={profile_path} name={name} character={character} />
	));

	// return <Card key={id} photo={data[0].profile_path} />;
	return <Carousel items={actors} />;
};
