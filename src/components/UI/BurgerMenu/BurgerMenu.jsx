import styles from './BurgerMenu.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/img/logo.svg';
import React, { useRef, useState } from 'react';
import { FiFilm, FiHome, FiTv } from 'react-icons/fi';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useChangePathName } from '../../../hooks/useChangePathName';

export const BurgerMenu = () => {
	const menuItem = useRef(null);
	const hamburgerRef = useRef(null);

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const { pathname } = useLocation();

	const closeMenu = () => {
		setIsMenuOpen(false);
		menuItem.current.checked = false;
	};

	useOutsideClick(closeMenu, hamburgerRef);
	useChangePathName(closeMenu);

	const items = [
		{ icon: <FiHome className={styles.icon} />, href: '/', text: 'Головна' },
		{ icon: <FiFilm />, href: '/movie', text: 'Фільми' },
		{ icon: <FiTv />, href: '/tv', text: 'Серіали' },
	];

	return (
		<div className={styles.menu}>
			<div className={styles.inner} ref={hamburgerRef}>
				<div className={styles.burger}>
					<input
						ref={menuItem}
						id='toggle'
						className={styles.toggle}
						type='checkbox'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					/>
					<label className={styles.button} htmlFor='toggle'>
						<span></span>
					</label>
				</div>

				<ul
					className={`${styles.result_box} ${isMenuOpen ? styles.visible : ''}`}
				>
					{items.map(({ icon, href, text }) => {
						const isCurrentPage = pathname === href;

						return (
							<Link
								to={href}
								key={href}
								className={`${styles.item} ${
									isCurrentPage ? styles.active : ''
								}`}
							>
								{icon}
								<span className={styles.text}>{text}</span>
							</Link>
						);
					})}
				</ul>
			</div>
			<Link to='/' className={styles.logo}>
				<Logo />
			</Link>
		</div>
	);
};
