import styles from '../Filters.module.scss';
import { useSelector } from 'react-redux';
// import { useGetCartoonsQuery } from '../../../redux/API/filmsAPI';
import { Gallery } from '../Gallery/Gallery';
import { Search } from '../../Search/Search';

export const Cartoons = () => {
	const { filters } = useSelector((state) => state.filters);
	const { page } = useSelector((state) => state.pagination);
	// const {
	// 	data = {},
	// 	isLoading,
	// 	isFetching,
	// } = useGetCartoonsQuery({
	// 	page,
	// 	filters,
	// });
	// console.log(data);
	// if (isLoading) return 'Завантаження...';
	// if (!data) return 'VPN Error!';
	return (
		<div className={styles.main}>
			{/*<div className={`wrapper ${styles.inner}`}>*/}
			{/*	<h1>Всі мультфільми</h1>*/}
			{/*	<p className={styles.subtitle}>Підбірка мультфільмів всього світу</p>*/}

			{/*	<div className={styles.body}>*/}
			{/*		<div className={styles.filters}>*/}
			{/*			<Search isFetching={isFetching} />*/}
			{/*		</div>*/}
			{/*		{!isFetching && !isLoading && (*/}
			{/*			<Gallery*/}
			{/*				isLoading={isLoading}*/}
			{/*				data={data}*/}
			{/*				isFetching={isFetching}*/}
			{/*				page={page}*/}
			{/*			/>*/}
			{/*		)}*/}
			{/*	</div>*/}
			{/*</div>*/}
		</div>
	);
};
