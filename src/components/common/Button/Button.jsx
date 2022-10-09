import styles from './Button.module.scss';
import { ReactComponent as Arrow } from '../../../assets/img/arrow-right.svg';

export const Button = ({ className, children }) => {
	return (
		<button className={`${className} ${styles.button}`}>{children}</button>
	);
};
