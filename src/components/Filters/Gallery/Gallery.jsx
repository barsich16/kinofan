import styles from './Gallery.module.scss';
import { Item } from './components/Item';
import { ReactComponent as DoubleArrowRight } from '../../../assets/img/double-arrow-right.svg';
import { ReactComponent as ArrowRight } from '../../../assets/img/arrow-right-p.svg';
import { useActions } from '../../../hooks/useActions';

export const Gallery = ({ data = {}, isLoading, IsFetching, page }) => {
	const { setPage } = useActions();
	if (isLoading) return 'Завантаження...';
	const { docs: items, pages = 1, total = 1 } = data;

	const changePage = (newPage) => {
		setPage(newPage);
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'instant', //'smooth' для плавного прокруту
		});
	};

	console.log(pages);
	console.log(total);
	if (total < 1) return <p>По вашому запиту нічого не знайдено...</p>;
	return (
		<div className={styles.main}>
			<div className={styles.films}>
				{items.map((item) => (
					<Item key={item.id} data={item} />
				))}
			</div>
			<div className={styles.pagination}>
				<button
					disabled={page === 1}
					className={styles.arrow}
					onClick={() => changePage(1)}
				>
					<DoubleArrowRight className={styles.arrow_left} />
				</button>
				<button
					disabled={page === 1}
					className={styles.arrow}
					onClick={() => changePage(page - 1)}
				>
					<ArrowRight width={18} height={18} className={styles.arrow_left} />
				</button>
				<div className={styles.pages}>
					{page} / {pages}
				</div>
				<button
					className={styles.arrow}
					disabled={page === pages}
					onClick={() => changePage(page + 1)}
				>
					<ArrowRight width={18} height={18} />
				</button>
				<button
					className={styles.arrow}
					disabled={page === pages}
					onClick={() => changePage(pages)}
				>
					<DoubleArrowRight />
				</button>
			</div>
		</div>
	);
};
