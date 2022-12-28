import styles from './BurgerMenu.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/img/logo.svg';
import React, { useEffect, useRef } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

export const BurgerMenu = () => {
	const menuItem = useRef(null);
	const hamburgerRef = useRef(null);

	const hideMenu = () => {
		menuItem.current.checked = false;
	};

	useOutsideClick(hideMenu, hamburgerRef);

	return (
		<div className={styles.menu}>
			<div className='hamburger-menu' ref={hamburgerRef}>
				<input ref={menuItem} id='menu__toggle' type='checkbox' />
				<label className='menu__btn' htmlFor='menu__toggle'>
					<span></span>
				</label>

				<ul className='menu__box'>
					<Link to={'/'} className='menu__item' onClick={hideMenu}>
						Головна
					</Link>
					<li>
						<Link to={'/movie'} className='menu__item' onClick={hideMenu}>
							Фільми
						</Link>
					</li>
					<li>
						<Link to={'/tv'} className='menu__item' onClick={hideMenu}>
							Серіали
						</Link>
					</li>
				</ul>
			</div>
			<Link to='/' className={styles.logo}>
				<Logo />
			</Link>
		</div>
	);
};
