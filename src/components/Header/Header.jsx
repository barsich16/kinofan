import React, { useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/img/search.svg';
import { ReactComponent as Cross } from '../../assets/img/cross.svg';
import { Link } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
import { BookSearchResults } from './MediaSearchResults/MediaSearchResult';

export const Header = () => {
	const menuItem = useRef(null);
	const searchResult = useRef(null);
	const searchInput = useRef(null);
	const [isSearchResultOpen, setIsSearchResultOpen] = useState(true);

	useEffect(() => {
		const onClick = (e) =>
			searchResult.current?.contains(e.target) ||
			searchInput.current.contains(e.target) ||
			setIsSearchResultOpen(false);
		document.addEventListener('click', onClick);
		return () => {
			document.removeEventListener('click', onClick);
		};
	}, []);

	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	console.log(debouncedSearchTerm);
	console.log(isSearchResultOpen);

	const onMenuItemClick = () => {
		console.log(menuItem.current);
		menuItem.current.checked = false;
	};

	return (
		<div className={styles.header}>
			<div className={`wrapper ${styles.inner}`}>
				<div className={styles.menu}>
					<div className='hamburger-menu'>
						<input ref={menuItem} id='menu__toggle' type='checkbox' />
						<label className='menu__btn' htmlFor='menu__toggle'>
							<span></span>
						</label>

						<ul className='menu__box'>
							<Link to={'/'} className='menu__item' onClick={onMenuItemClick}>
								Головна
							</Link>
							<li>
								<Link
									to={'/films'}
									className='menu__item'
									onClick={onMenuItemClick}
								>
									Фільми
								</Link>
							</li>
							<li>
								<Link
									to={'/series'}
									className='menu__item'
									onClick={onMenuItemClick}
								>
									Серіали
								</Link>
							</li>
							<li>
								<Link
									to={'/favourites'}
									className='menu__item'
									onClick={onMenuItemClick}
								>
									Обране
								</Link>
							</li>
						</ul>
					</div>
					<Link to='/' className={styles.logo}>
						<Logo />
					</Link>
				</div>
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
						<button onClick={() => setSearchTerm('')} className={styles.clear}>
							<Cross width={20} height={20} />
						</button>
						{isSearchResultOpen && debouncedSearchTerm !== '' && (
							<BookSearchResults
								ref={searchResult}
								searchTerm={debouncedSearchTerm}
							/>
						)}
					</div>

					<button className={`buttonBase ${styles.searchBtn}`}>
						<SearchIcon width={20} height={20} className={styles.searchIcon} />
					</button>
				</div>
				<div className={styles.login}>Увійти</div>
			</div>
		</div>
	);
};
