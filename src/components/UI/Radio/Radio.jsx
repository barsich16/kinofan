import styles from './Radio.module.scss';
import { useField } from 'formik';

export const Radio = ({ label, ...props }) => {
	const [field] = useField(props);

	return (
		<label className={styles.label}>
			<input {...field} {...props} />
			<span>{label}</span>
		</label>
	);
};
