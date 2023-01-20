import { useState, useEffect, forwardRef } from 'react';
import { useSearchMediaQuery } from '../../../redux/API/filmsAPI';
import styles from './MediaSearchResults.module.scss';
import { Link } from 'react-router-dom';

export const MediaSearchResults = forwardRef(({ searchTerm = '' }, ref) => {
	const [type, setType] = useState('movie');
	const [filteredSearchTerm, setFilteredSearchTerm] = useState(
		searchTerm === '',
	);
	console.log(searchTerm);
	console.log(filteredSearchTerm);
	const { data, error, isLoading, isFetching } =
		useSearchMediaQuery(filteredSearchTerm);

	const media = data ?? [];

	const mediaByType = media.filter((item) => item.media_type === type);

	useEffect(() => {
		setFilteredSearchTerm(searchTerm);
	}, [searchTerm]);

	// if (error) {
	// 	return <div className='text-hint'>Error while fetching books</div>;
	// }
	//
	// if (isLoading) {
	// 	return <div className='text-hint'>Loading books...</div>;
	// }
	//
	// if (isFetching) {
	// 	return <div className='text-hint'>Fetching books...</div>;
	// }

	// if (mediaByType.length === 0) {
	// 	return <div className='text-hint'>No books found</div>;
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
				{mediaByType.length === 0 && (
					<div className={styles.empty}>
						По вашому запиту нічого не знайдено
					</div>
				)}
				{mediaByType.map(({ id, poster_path, overview, name, year }) => (
					<li className={styles.main} key={id}>
						<Link to={`/${type}/${id}`} className={styles.item}>
							<div className={styles.img_block}>
								<img
									src={
										`https://image.tmdb.org/t/p/w300${poster_path}` ||
										'https://place-hold.it/64x96'
									}
									alt=''
								/>
							</div>
							<div className={styles.info}>
								<h2 className={styles.title}>
									{name} <span className={styles.year}>{year}</span>
								</h2>
								<p className={styles.desc}>{overview}</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
});
