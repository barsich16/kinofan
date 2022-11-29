import { useSelector } from 'react-redux';
import { useGetInfoQuery } from '../../redux/API/filmsAPI';
import styles from './Filters.module.scss';
import { Search } from '../Search/Search';
import { Gallery } from './Gallery/Gallery';

export const UniversalComp = ({ type }) => {
	//test t
	const { filters } = useSelector((state) => state.filters);
	const { page } = useSelector((state) => state.pagination);
	const {
		data = {},
		isLoading,
		isFetching,
	} = useGetInfoQuery({
		page,
		filters,
		type,
	});
	console.log(data);
	// if (isLoading) return 'Завантаження...';
	// if (!data) return 'VPN Error!';
	return (
		<div className={styles.main}>
			<div className={`wrapper ${styles.inner}`}>
				<h1>Всі {type} мультфільми</h1>
				<p className={styles.subtitle}>Підбірка мультфільмів всього світу</p>

				<div className={styles.body}>
					<div className={styles.filters}>
						<Search isFetching={isFetching} />
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
