import { useState, useEffect, forwardRef } from 'react';
import { useSearchMediaQuery } from '../../../redux/API/filmsAPI';
import styles from './MediaSearchResults.module.scss';
import { Link } from 'react-router-dom';
// import { useSearchBooksQuery } from "./booksApi";

export const BookSearchResults = forwardRef(({ searchTerm = '' }, ref) => {
	console.log(searchTerm);
	// console.log(props);
	const [type, setType] = useState('movie');
	// console.log(type);
	const [filteredSearchTerm, setFilteredSearchTerm] = useState(
		searchTerm === '',
	);
	const { data, error, isLoading, isFetching } =
		useSearchMediaQuery(filteredSearchTerm);
	// const books = [
	// 	{
	// 		id: 436270,
	// 		original_title: 'Black Adam',
	// 		overview:
	// 			'Минуло майже 5000 років відтоді, як стародавні боги зробили Чорного Адама всемогутнім. І відразу ж запроторили до в’язниці. Проте він звільниться зі своєї земної гробниці і покаже сучасному світові власну унікальну форму правосуддя.',
	// 		popularity: 5735.977,
	// 		poster_path: '/yh5OPOHEBOHqGmronG3r4JZvRKJ.jpg',
	// 		release_date: '2022-10-19',
	// 		runtime: 125,
	// 		status: 'Released',
	// 		tagline: 'Світу був потрібен герой, а прийшов Чорний Адам',
	// 		title: 'Чорний Адам',
	// 		vote_average: 7.309,
	// 		vote_count: 2573,
	// 	},
	// 	{
	// 		id: 436272,
	// 		original_title: 'Black Adam',
	// 		overview:
	// 			'Минуло майже 5000 років відтоді, як стародавні боги зробили Чорного Адама всемогутнім. І відразу ж запроторили до в’язниці. Проте він звільниться зі своєї земної гробниці і покаже сучасному світові власну унікальну форму правосуддя.',
	// 		popularity: 5735.977,
	// 		poster_path: '/yh5OPOHEBOHqGmronG3r4JZvRKJ.jpg',
	// 		release_date: '2022-10-19',
	// 		runtime: 125,
	// 		status: 'Released',
	// 		tagline: 'Світу був потрібен герой, а прийшов Чорний Адам',
	// 		title: 'Чорний Адам',
	// 		vote_average: 7.309,
	// 		vote_count: 2573,
	// 	},
	// 	{
	// 		id: 436273,
	// 		original_title: 'Black Adam',
	// 		overview:
	// 			'Минуло майже 5000 років відтоді, як стародавні боги зробили Чорного Адама всемогутнім. І відразу ж запроторили до в’язниці. Проте він звільниться зі своєї земної гробниці і покаже сучасному світові власну унікальну форму правосуддя.',
	// 		popularity: 5735.977,
	// 		poster_path: '/yh5OPOHEBOHqGmronG3r4JZvRKJ.jpg',
	// 		release_date: '2022-10-19',
	// 		runtime: 125,
	// 		status: 'Released',
	// 		tagline: 'Світу був потрібен герой, а прийшов Чорний Адам',
	// 		title: 'Чорний Адам',
	// 		vote_average: 7.309,
	// 		vote_count: 2573,
	// 	},
	// ];
	const books = data?.results ?? [];
	const mediaByType = books.filter((book) => book.media_type === type);
	console.log(mediaByType);
	// console.log(data);
	// console.log(error);

	useEffect(() => {
		// if (searchTerm.length > 1) {
		setFilteredSearchTerm(searchTerm);
		// }
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
		<div
			className={styles.results}
			ref={ref}
			// style={{ display: `${isOpen ? 'block' : 'none'}` }}
		>
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
				{mediaByType.map(
					({ id, poster_path, title, release_date, overview, name }, index) => (
						<li className={styles.main} key={id}>
							<Link to={`/film/${id}`} className={styles.item}>
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
										{title || name}{' '}
										<span className={styles.year}>
											{/*{release_date.slice(0, 4)}*/}
											2022
										</span>
									</h2>
									<p className={styles.desc}>{overview}</p>
								</div>
							</Link>
							{/*{item.vote_count}*/}
						</li>
					),
				)}
			</ul>
		</div>
	);
});
