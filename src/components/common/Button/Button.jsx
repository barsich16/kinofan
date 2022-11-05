import styles from './Button.module.scss';
import { ReactComponent as Arrow } from '../../../assets/img/arrow-right.svg';

export const Button = ({ children, className, ...props }) => {
	return (
		<button className={`${className} ${styles.button}`} {...props}>
			{children}
		</button>
	);
};
