import React from 'react';
import styles from './Footer.module.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={`wrapper ${styles.inner}`}>
				<Logo className={styles.logo} />
				<div className={styles.genres}>
					<Link to={'/movie'}>Фільми</Link>
					<Link to={'/tv'}>Серіали</Link>
				</div>
				<span>© 2022-2023 Kinofan</span>
			</div>
		</div>
	);
};
