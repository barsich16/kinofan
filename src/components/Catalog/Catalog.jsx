import styles from './Catalog.module.scss';
import { Button } from '../common/Button/Button';
import { useEffect, useState } from 'react';
import { useGetNewFilmsByTypeQuery } from '../../redux/API/filmsAPI';
import { Link } from 'react-router-dom';
import { Card } from './Item/Card';
import { SkeletonCards } from './Item/SkeletonCards';

export const Catalog = ({ type = 'movie' }) => {
	const typeUA = type === 'movie' ? 'фільми' : 'серіали';

	const [page, setPage] = useState(1);
	const [items, setItems] = useState([]);
	const [countForView, setCountForView] = useState(10);

	const { data, isFetching } = useGetNewFilmsByTypeQuery({ page, type });

	useEffect(() => {
		if (data) {
			setItems([...items, ...data]);
		}
	}, [data]);

	const increaseLimit = () => {
		if (countForView + 10 > page * 20) {
			setPage((currentPage) => {
				return currentPage + 1;
			});
		}
		setCountForView((countForView) => {
			return countForView + 10;
		});
	};

	return (
		<div className={styles.catalog}>
			<div className='wrapper'>
				<div className={styles.header}>
					<h2>Популярні {typeUA}</h2>
					<Button>
						<Link to={`/${type}`}>Дивитись усі</Link>
					</Button>
				</div>
				<div className={styles.items}>
					{items.length === 0 ? (
						<SkeletonCards number={10} />
					) : (
						items.map((item, index) => {
							if (index < countForView) {
								return <Card type={type} item={item} key={item.id} />;
							}
						})
					)}
				</div>

				<Button className={styles.more} onClick={increaseLimit}>
					<span>{isFetching ? 'Завантаження...' : 'Показати ще'}</span>
				</Button>
			</div>
		</div>
	);
};
