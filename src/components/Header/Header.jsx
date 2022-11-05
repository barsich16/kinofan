import React, { useRef } from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/img/search.svg';
import { ReactComponent as Arrow } from '../../assets/img/arrow-right.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
	const menuItem = useRef(null);

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
									to={'/cartoons'}
									className='menu__item'
									onClick={onMenuItemClick}
								>
									Мультфільми
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
						// value={values.revo}
						// onChange={handleChange}
						placeholder='Пошук...'
						id='search'
						name='search'
						type='text'
					/>
					<button className={`buttonBase ${styles.searchBtn}`}>
						<SearchIcon width={20} height={20} className={styles.searchIcon} />
					</button>
				</div>
				<div className={styles.login}>Увійти</div>
			</div>
		</div>
	);
};
