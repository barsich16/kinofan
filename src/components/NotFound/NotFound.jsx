import styles from './NotFound.module.scss';

export const NotFound = () => {
	return (
		<div className={styles.main}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>
					Error 404: Сторінку не <span>знайдено</span>
				</h1>
			</div>
		</div>
	);
};
