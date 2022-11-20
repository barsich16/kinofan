import styles from './SearchInput.module.scss';
import { useField } from 'formik';

export const SearchInput = ({ label, value, onChange, name }) => {
	// const [field, meta, helpers] = useField(props);
	// const { setValue } = helpers;
	// console.log(field);

	// const testChange = (e) => {
	// 	console.log(e);
	// 	helpers.setValue('222');
	// };
	return (
		<label className={styles.label}>
			<span>{label}</span>
			<input
				className={styles.input}
				// name={props.name}
				value={value}
				onChange={(event) => onChange(event.target.value)}
				// onChange={testChange}
			/>
		</label>
	);
};
