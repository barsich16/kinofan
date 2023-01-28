import styles from './Card.module.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Ratio from 'react-ratio';
export const SkeletonCard = () => {
	return (
		<div className={styles.item}>
			<Ratio ratio={2 / 3} className={styles.ratio}>
				<div className={styles.img_block}>
					<Skeleton height='100%' />
				</div>
			</Ratio>
			<Skeleton />
			<p>
				<Skeleton />
			</p>
		</div>
	);
};

export const SkeletonCards = ({ number }) => {
	return new Array(number)
		.fill()
		.map((_, index) => <SkeletonCard key={index} />);
};
