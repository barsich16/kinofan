import styles from './Button.module.scss';

export const Button = ({ children, className, ...props }) => {
	return (
		<button className={`${className} ${styles.button}`} {...props}>
			{children}
		</button>
	);
};
