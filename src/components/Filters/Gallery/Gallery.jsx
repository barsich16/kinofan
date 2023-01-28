import styles from './Gallery.module.scss';
import { Item, SkeletonItem } from './components/Item';
import { Pagination } from '../../UI/Pagination/Pagination';

export const Gallery = ({ data = {}, isFetching, type }) => {
	const { results: items = [], total_pages = 1 } = data;

	if (total_pages < 1) return <p>По вашому запиту нічого не знайдено...</p>;

	return (
		<div className={styles.main}>
			<div className={styles.films}>
				{isFetching
					? new Array(5).fill().map((_, index) => <SkeletonItem key={index} />)
					: items.map((item) => <Item key={item.id} data={item} type={type} />)}
			</div>
			<Pagination totalPages={data.total_pages} />
		</div>
	);
};
