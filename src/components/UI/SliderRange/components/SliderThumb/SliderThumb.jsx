import { useMemo } from 'react';
import styles from './SliderThumb.module.scss';

export const SliderThumb = ({ value, initialValue, props }) => {
	const isChanged = useMemo(
		() => initialValue !== value,
		[initialValue, value],
	);

	return (
		<div
			{...props}
			className={`${styles.thumb} ${isChanged && styles.changed}`}
		/>
	);
};
