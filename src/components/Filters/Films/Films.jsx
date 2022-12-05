import styles from '../Filters.module.scss';
import { useSelector } from 'react-redux';
// import { useGetFilmsQuery } from '../../../redux/API/filmsAPI';
import { Gallery } from '../Gallery/Gallery';
import { Search } from '../../Search/Search';
import { useGetFilmsQuery } from '../../../redux/API/filmsAPI';

export const Films = () => {
	const { filters } = useSelector((state) => state.filters);
	const { page } = useSelector((state) => state.pagination);
	const {
		data = {},
		isLoading,
		isFetching,
	} = useGetFilmsQuery({
		page,
		filters,
	});
	console.log(data);
	return (
		<div className={styles.main}>
			<div className={`wrapper ${styles.inner}`}>
				<h1>Всі фільми</h1>
				<p className={styles.subtitle}>Підбірка фільмів всього світу</p>

				<div className={styles.body}>
					<div className={styles.filters}>
						{/*<Search isFetching={isFetching} />*/}
						<Search type='movie' />
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
