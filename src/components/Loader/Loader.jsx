import styles from './Loader.module.scss';

export const Loader = () => {
	return (
		<div className={styles.main}>
			<div className={styles.loader}>
				<div className={styles.filmstrip}></div>
				<p className={styles.text}>Завантаження</p>
			</div>
		</div>
	);
};
