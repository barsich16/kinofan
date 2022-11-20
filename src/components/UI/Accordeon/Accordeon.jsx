import styles from './Accordeon.module.scss';

export const Accordeon = ({ children, className, title, ...props }) => {
	return (
		<div className={styles.tabs}>
			<div className={styles.tab}>
				<input type='checkbox' id={title} className={styles.input} />
				<label className={styles.label} htmlFor={title}>
					{title}
				</label>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	);
};
