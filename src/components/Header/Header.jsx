import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/img/search.svg';
import { ReactComponent as Arrow } from '../../assets/img/arrow-right.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<div className={styles.header}>
			<div className={`wrapper ${styles.inner}`}>
				<div className={styles.menu}>
					<div className='hamburger-menu'>
						<input id='menu__toggle' type='checkbox' />
						<label className='menu__btn' htmlFor='menu__toggle'>
							<span></span>
						</label>

						<ul className='menu__box'>
							<li>
								<a className='menu__item' href='#'>
									Головна
								</a>
							</li>
							<li>
								<a className='menu__item' href='#'>
									Фільми
								</a>
							</li>
							<li>
								<a className='menu__item' href='#'>
									Серіали
								</a>
							</li>
							<li>
								<a className='menu__item' href='#'>
									Мультфільми
								</a>
							</li>
							<li>
								<a className='menu__item' href='#'>
									Обране
								</a>
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
