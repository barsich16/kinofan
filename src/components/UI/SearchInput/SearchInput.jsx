import styles from './SearchInput.module.scss';

export const SearchInput = ({
	label,
	wrapperClassName = '',
	error,
	touched,
	...props
}) => {
	return (
		<label className={`${styles.label} ${wrapperClassName}`}>
			<span>{label}</span>
			<input className={styles.input} required={true} {...props} />
			{touched && error && <div className={styles.error}>{error}</div>}
		</label>
	);
};
