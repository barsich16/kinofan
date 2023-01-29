import { useState, useEffect, forwardRef } from 'react';
import { useSearchMediaByNameQuery } from '../../../redux/API/filmsAPI';
import styles from './MediaSearchResults.module.scss';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { NoImage } from '../../common/NoImage/NoImage';

export const MediaSearchResults = forwardRef(({ searchTerm = '' }, ref) => {
	const [type, setType] = useState('movie');
	const [filteredSearchTerm, setFilteredSearchTerm] = useState(
		searchTerm === '',
	);

	const { data, error, isFetching } =
		useSearchMediaByNameQuery(filteredSearchTerm);

	const media = data ?? [];
	const mediaByType = media.filter((item) => item.media_type === type);

	useEffect(() => {
		setFilteredSearchTerm(searchTerm);
	}, [searchTerm]);

	const skeletons = new Array(2)
		.fill()
		.map((_, index) => <SkeletonCard key={index} />);
	const cards = mediaByType.map((item) => (
		<Card item={item} type={type} key={item?.id} />
	));

	// if (error) {
	// 	return <div className='text-hint'>Error while fetching books</div>;
	// }

	return (
		<div className={styles.results} ref={ref}>
			<div className={styles.types}>
				<input
					type='radio'
					name='type'
					value='movie'
					id='movie'
					checked={type === 'movie'}
					onChange={(e) => setType(e.target.value)}
				/>
				<label htmlFor='movie'>Фільми</label>
				<input
					type='radio'
					name='type'
					value='tv'
					id='tv'
					checked={type === 'tv'}
					onChange={(e) => setType(e.target.value)}
				/>
				<label htmlFor='tv'>Серіали</label>
			</div>
			<ul className={styles.wrapper}>
				{isFetching ? (
					skeletons
				) : mediaByType.length === 0 ? (
					<div className={styles.empty}>
						По вашому запиту нічого не знайдено
					</div>
				) : error ? (
					<div className={styles.empty}>Помилка при завантаженні даних</div>
				) : (
					cards
				)}
			</ul>
		</div>
	);
});

const Card = ({ item, type }) => {
	const { id, poster_path, overview, name, year } = item;
	return (
		<li className={styles.main}>
			<Link to={`/${type}/${id}`} className={styles.item}>
				<div className={styles.img_block}>
					{poster_path ? (
						<img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt='' />
					) : (
						<NoImage />
					)}
				</div>
				<div className={styles.info}>
					<h2 className={styles.title}>
						{name} <span className={styles.year}>{year}</span>
					</h2>
					<p className={styles.desc}>{overview}</p>
				</div>
			</Link>
		</li>
	);
};

const SkeletonCard = () => {
	return (
		<li className={styles.main}>
			<div className={styles.item}>
				<div className={styles.img_block}>
					<Skeleton height='100%' />
				</div>
				<div className={styles.info}>
					<h2 className={styles.title}>
						<Skeleton width='150px' />
						<span className={styles.year}>
							<Skeleton width='50px' />
						</span>
					</h2>
					<p className={styles.desc}>
						<Skeleton width='240px' />
					</p>
				</div>
			</div>
		</li>
	);
};
