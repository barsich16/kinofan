import styles from '../Filters.module.scss';
import { useSelector } from 'react-redux';
import { useGetSeriesQuery } from '../../../redux/API/filmsAPI';
import { Gallery } from '../Gallery/Gallery';
import { Search } from '../../Search/Search';
import { useAutoScrollToTop } from '../../../hooks/useAutoScrollToTop';
import { useState } from 'react';
import { GoSettings } from 'react-icons/go';
import { Button } from '../../common/Button/Button';

export const Series = () => {
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
	} = useGetSeriesQuery({
		page,
		filters,
	});
	console.log(data);
	return (
		<div className={styles.main}>
			<div className={`wrapper ${styles.inner}`}>
				<h1>Всі Серіали</h1>
				<p className={styles.subtitle}>Підбірка серіалів всього світу</p>
				<Button className={styles.openFilters} onClick={openFilters}>
					<GoSettings /> <span>Фільтри</span>
				</Button>
				<div className={styles.body}>
					<Search
						type='tv'
						visible={isFiltersOpen}
						setVisible={setIsFiltersOpen}
					/>
					<Gallery
						isLoading={isLoading}
						data={data}
						isFetching={isFetching}
						type='tv'
					/>
				</div>
			</div>
		</div>
	);
};
