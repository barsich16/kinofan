import styles from '../Filters.module.scss';
import { useSelector } from 'react-redux';
import { Gallery } from '../Gallery/Gallery';
import { Search } from '../../Search/Search';
import { useGetFilmsQuery } from '../../../redux/API/filmsAPI';
import { useAutoScrollToTop } from '../../../hooks/useAutoScrollToTop';
import { Button } from '../../common/Button/Button';
import { GoSettings } from 'react-icons/go';
import { useState } from 'react';

export const Films = () => {
	const { filters } = useSelector((state) => state.filters);
	const { page } = useSelector((state) => state.pagination);
	const [isFiltersOpen, setIsFiltersOpen] = useState(false);

	const openFilters = () => {
		setIsFiltersOpen(true);
	};
	useAutoScrollToTop();
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
				<Button className={styles.openFilters} onClick={openFilters}>
					<GoSettings /> <span>Фільтри</span>
				</Button>
				<div className={styles.body}>
					{/*<Search isFetching={isFetching} />*/}
					<Search
						type='movie'
						visible={isFiltersOpen}
						setVisible={setIsFiltersOpen}
					/>
					{!isFetching && !isLoading && (
						<Gallery
							isLoading={isLoading}
							data={data}
							isFetching={isFetching}
							page={page}
							type='movie'
						/>
					)}
				</div>
			</div>
		</div>
	);
};
