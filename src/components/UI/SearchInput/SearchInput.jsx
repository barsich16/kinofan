import styles from './SearchInput.module.scss';

export const SearchInput = ({ label, wrapperClassName = '', ...props }) => {
	return (
		<label className={`${styles.label} ${wrapperClassName}`}>
			<span>{label}</span>
			<input className={styles.input} {...props} />
		</label>
	);
};
