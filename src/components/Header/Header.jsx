import React, { useRef, useState } from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/img/search.svg';
import { Link } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
import { BookSearchResults } from './MediaSearchResults/MediaSearchResult';

export const Header = () => {
	const menuItem = useRef(null);
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearchTerm = useDebounce(searchTerm, 500);

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
					<input
						className={`input ${styles.input}`}
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder='Пошук...'
						id='search'
						name='search'
						type='text'
					/>
					{debouncedSearchTerm !== '' && (
						<div className={styles.results}>
							<BookSearchResults searchTerm={debouncedSearchTerm} />
						</div>

					)}
					<button className={`buttonBase ${styles.searchBtn}`}>
						<SearchIcon width={20} height={20} className={styles.searchIcon} />
					</button>
				</div>
				<div className={styles.login}>Увійти</div>
			</div>

		</div>
	);
};
