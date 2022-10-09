import styles from './Catalog.module.scss';
import image from '../../assets/img/example.jpg';
import { ReactComponent as Arrow } from '../../assets/img/arrow-right.svg';
import { Button } from '../common/Button/Button';

export const Catalog = () => {
	return (
		<div className={`wrapper ${styles.catalog}`}>
			<div className={styles.header}>
				<h2>Нові фільми</h2>
				<Button className={styles.button}>
					<span>Дивитись усі</span>
				</Button>
			</div>
			<div className={styles.items}>
				<div className={styles.item}>
					<div className={styles.image}>
						<img src={image} alt='image' />
						<span>6.9</span>
					</div>
					<a href='#'>Бетмен</a>
					<p>2022, фільм</p>
				</div>
				<div className={styles.item}>
					<div className={styles.image}>
						<img src={image} alt='image' />
						<span>6.9</span>
					</div>
					<a href='#'>Бетмен</a>
					<p>2022, фільм</p>
				</div>
				<div className={styles.item}>
					<div className={styles.image}>
						<img src={image} alt='image' />
						<span>6.9</span>
					</div>
					<a href='#'>Бетмен</a>
					<p>2022, фільм</p>
				</div>
				<div className={styles.item}>
					<div className={styles.image}>
						<img src={image} alt='image' />
						<span>6.9</span>
					</div>
					<a href='#'>Бетмен</a>
					<p>2022, фільм</p>
				</div>
				<div className={styles.item}>
					<div className={styles.image}>
						<img src={image} alt='image' />
						<span>6.9</span>
					</div>
					<a href='#'>Бетмен</a>
					<p>2022, фільм</p>
				</div>
				<div className={styles.item}>
					<div className={styles.image}>
						<img src={image} alt='image' />
						<span>6.9</span>
					</div>
					<a href='#'>Бетмен</a>
					<p>2022, фільм</p>
				</div>
			</div>

			<Button className={styles.more}>
				<span>Дивитись усі</span>
			</Button>
		</div>
	);
};
