import { ReactComponent as Cross } from '../../../assets/img/cross.svg';
import { MediaSearchResults } from '../../Header/MediaSearchResults/MediaSearchResult';
import { ReactComponent as SearchIcon } from '../../../assets/img/search.svg';
import React, { useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import styles from './Searchbar.module.scss';

export const Searchbar = () => {
	const searchResult = useRef(null);
	const searchInput = useRef(null);
	const [isSearchResultOpen, setIsSearchResultOpen] = useState(true);

	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	const closeWindowResult = () => {
		setIsSearchResultOpen(false);
	};

	useEffect(() => {
		//закрити вікно пош.рядку при кліку на іншу область
		const onClick = (e) => {
			searchResult.current?.contains(e.target) ||
				searchInput.current?.contains(e.target) ||
				closeWindowResult();
		};

		document.addEventListener('click', onClick);
		return () => {
			document.removeEventListener('click', onClick);
		};
	}, []);

	return (
		<div className={styles.searchbar}>
			<div className={styles.searcharea}>
				<input
					className={`input ${styles.input}`}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onClick={() => setIsSearchResultOpen(true)}
					placeholder='Пошук...'
					id='search'
					name='search'
					type='text'
					autoComplete='off'
					ref={searchInput}
				></input>
				<button
					style={{ display: `${searchTerm === '' ? 'none' : 'block'}` }}
					onClick={() => setSearchTerm('')}
					className={styles.clear}
				>
					<Cross width={20} height={20} />
				</button>
				{isSearchResultOpen && debouncedSearchTerm !== '' && (
					<MediaSearchResults
						ref={searchResult}
						searchTerm={debouncedSearchTerm}
						closeRes={closeWindowResult}
					/>
				)}
			</div>

			<button className={`buttonBase ${styles.searchBtn}`}>
				<SearchIcon width={20} height={20} className={styles.searchIcon} />
			</button>
		</div>
	);
};
