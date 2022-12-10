import { useState, useEffect } from 'react';
import { useSearchMediaQuery } from '../../../redux/API/filmsAPI';
import styles from './MediaSearchResults.module.css'
// import { useSearchBooksQuery } from "./booksApi";

export const BookSearchResults = ({ searchTerm }) => {
	console.log(searchTerm);
	const [filteredSearchTerm, setFilteredSearchTerm] = useState(
		searchTerm === '',
	);
	const { data, error, isLoading, isFetching } =
		useSearchMediaQuery(filteredSearchTerm);
	const books = data?.results ?? [];
	console.log(data);
	// console.log(error);

	useEffect(() => {
		// if (searchTerm.length > 1) {
		setFilteredSearchTerm(searchTerm);
		// }
	}, [searchTerm]);

	if (error) {
		return <div className='text-hint'>Error while fetching books</div>;
	}

	if (isLoading) {
		return <div className='text-hint'>Loading books...</div>;
	}

	if (isFetching) {
		return <div className='text-hint'>Fetching books...</div>;
	}

	// if (books.results.length === 0) {
	// 	return <div className='text-hint'>No books found</div>;
	// }

	return (
		<ul>
			{books.map((item) => (
				<li className={styles.item} key={item.id}>{item.vote_count}</li>
			))}
		</ul>
	);
};
