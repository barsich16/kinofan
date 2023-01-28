import { MediaSearchResults } from '../../Header/MediaSearchResults/MediaSearchResult';
import React, { useEffect, useRef, useState } from 'react';
import { FiX, FiSearch, FiChevronLeft } from 'react-icons/fi';
import { useDebounce } from '../../../hooks/useDebounce';
import styles from './Searchbar.module.scss';
import { useChangePathName } from '../../../hooks/useChangePathName';

export const Searchbar = () => {
	const searchResult = useRef(null);
	const searchInput = useRef(null);
	const openSearchButton = useRef(null);

	const [isSearchResultOpen, setIsSearchResultOpen] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	useChangePathName(() => setSearchTerm(''));

	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	const closeWindowResult = () => {
		setIsSearchResultOpen(false);
	};

	const openSearch = () => {
		setIsSearchOpen(true);
		searchInput.current.focus();
		setIsSearchResultOpen(true);
	};

	useEffect(() => {
		//закрити вікно пош.рядку при кліку на іншу область
		const onClick = (e) => {
			searchResult.current?.contains(e.target) ||
				searchInput.current?.contains(e.target) ||
				openSearchButton.current?.contains(e.target) ||
				closeWindowResult();
		};

		document.addEventListener('click', onClick);
		return () => {
			document.removeEventListener('click', onClick);
		};
	}, []);

	return (
		<>
			<div className={styles.searchbar}>
				<div className={`${styles.searcharea} `}>
					<input
						className={`input ${styles.input} ${
							isSearchOpen ? styles.visible : ''
						}`}
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
						onClick={() => setSearchTerm('')}
						className={`${styles.clear} ${
							searchTerm === '' ? '' : styles.active
						}`}
					>
						<FiX />
					</button>
					<button
						className={`buttonBase ${styles.backBtn}`}
						onClick={() => setIsSearchOpen(false)}
					>
						<FiChevronLeft />
					</button>
					{isSearchResultOpen && debouncedSearchTerm !== '' && (
						<MediaSearchResults
							ref={searchResult}
							searchTerm={debouncedSearchTerm}
						/>
					)}
				</div>

				<button className={`buttonBase ${styles.searchBtn}`}>
					<FiSearch className={styles.searchIcon} />
				</button>
			</div>
			<button
				className={`buttonBase ${styles.openSearch}`}
				onClick={() => openSearch()}
				ref={openSearchButton}
			>
				<FiSearch className={styles.searchIcon} />
			</button>
		</>
	);
};
