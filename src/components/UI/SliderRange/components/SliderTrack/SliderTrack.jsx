import { useMemo } from 'react';
import { getTrackBackground } from 'react-range';
import styles from './SliderTrack.module.scss';

export const SliderTrack = ({ children, values, props, min, max }) => {
	const backgroundStyle = useMemo(
		() =>
			getTrackBackground({
				values,
				colors: ['rgba(0,0,0,.2)', '#005382', 'rgba(0,0,0,.2)'],
				min: min,
				max: max,
			}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[values],
	);

	return (
		<div
			ref={props.ref}
			className={styles.track}
			style={{ background: backgroundStyle }}
		>
			{children}
		</div>
	);
};
