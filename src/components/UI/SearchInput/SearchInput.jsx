import styles from './SearchInput.module.scss';

export const SearchInput = ({ label, value, onChange, ...props }) => {
	return (
		<label className={styles.label}>
			<span>{label}</span>
			<input
				className={styles.input}
				value={value}
				onChange={(event) => onChange(event.target.value)}
				{...props}
			/>
		</label>
	);
};
