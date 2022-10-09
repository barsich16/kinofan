import React from 'react';
import styles from './Footer.module.scss';
import { Exchanger } from '../Exchanger/Exchanger';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={`wrapper ${styles.inner}`}>
				{/*<Exchanger />*/}
				<Logo className={styles.logo} />
				<div className={styles.genres}>
					<a href='#'>Фільми</a>
					<a href='#'>Серіали</a>
					<a href='#'>Мультфільми</a>
				</div>
				<span>© 2022 Kinofan</span>
			</div>
		</div>
	);
};
