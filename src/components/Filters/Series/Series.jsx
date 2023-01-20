import styles from '../Filters.module.scss';
import { useSelector } from 'react-redux';
import { useGetSeriesQuery } from '../../../redux/API/filmsAPI';
import { Gallery } from '../Gallery/Gallery';
import { Search } from '../../Search/Search';
import { useAutoScrollToTop } from '../../../hooks/useAutoScrollToTop';

export const Series = () => {
	const { filters } = useSelector((state) => state.filters);
	const { page } = useSelector((state) => state.pagination);
	useAutoScrollToTop();

	const {
		data = {},
		isLoading,
		isFetching,
	} = useGetSeriesQuery({
		page,
		filters,
	});
	console.log(data);
	// console.log(data);
	// if (isLoading) return 'Завантаження...';
	// if (!data) return 'VPN Error!';
	return (
		<div className={styles.main}>
			<div className={`wrapper ${styles.inner}`}>
				<h1>Всі Серіали</h1>
				<p className={styles.subtitle}>Підбірка серіалів всього світу</p>

				<div className={styles.body}>
					<div className={styles.filters}>
						<Search type='tv' />
					</div>
					{!isFetching && !isLoading && (
						<Gallery
							isLoading={isLoading}
							data={data}
							isFetching={isFetching}
							page={page}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
