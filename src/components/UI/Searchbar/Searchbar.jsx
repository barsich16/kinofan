import { ReactComponent as Cross } from '../../../assets/img/cross.svg';
import { MediaSearchResults } from '../../Header/MediaSearchResults/MediaSearchResult';
import { ReactComponent as SearchIcon } from '../../../assets/img/search.svg';
import React, { useEffect, useRef, useState } from 'react';
import { FiX, FiSearch, FiChevronLeft } from 'react-icons/fi';
import { useDebounce } from '../../../hooks/useDebounce';
import styles from './Searchbar.module.scss';
import { useLocation } from 'react-router-dom';
import { useChangePathName } from '../../../hooks/useChangePathName';

export const Searchbar = () => {
	const searchResult = useRef(null);
	const searchInput = useRef(null);
	const openSearchButton = useRef(null);
	const { pathname } = useLocation();

	const [isSearchResultOpen, setIsSearchResultOpen] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');
	useChangePathName(() => setSearchTerm(''));
	// useEffect(() => {
	// 	setSearchTerm('');
	// }, [pathname]);
	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const closeWindowResult = () => {
		setIsSearchResultOpen(false);
	};

	const openSearch = () => {
		setIsSearchOpen(true);
		searchInput.current.focus();
		setIsSearchResultOpen(true);
	};

	//TODO: добавить в масив і перевіряти кожен реф
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
						// style={{ display: `${searchTerm === '' ? 'none' : 'block'}` }}
						onClick={() => setSearchTerm('')}
						className={`${styles.clear} ${
							searchTerm === '' ? '' : styles.active
						}`}
					>
						<Cross width={20} height={20} />
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
					<SearchIcon width={20} height={20} className={styles.searchIcon} />
				</button>
			</div>
			<button
				className={`buttonBase ${styles.openSearch}`}
				onClick={() => openSearch()}
				ref={openSearchButton}
			>
				<SearchIcon width={20} height={20} className={styles.searchIcon} />
			</button>
		</>
	);
};
