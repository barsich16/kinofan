import styles from './Search.module.scss';
import { useEffect, useState } from 'react';
import { Accordeon } from '../UI/Accordeon/Accordeon';
import { RangeBlock } from '../UI/RangeBlock/RangeBlock';
import { Select } from '../UI/Select/Select';
import { Radio } from '../UI/Radio/Radio';
import { Formik } from 'formik';
import { getCurrentYear } from '../../helpers/getCurrentYear';
import { Button } from '../common/Button/Button';
import { setPage } from '../../redux/slices/paginationSlice';
import { useActions } from '../../hooks/useActions';
import { useGetFilmsGenresQuery } from '../../redux/API/filmsAPI';
import { genresNameToString } from '../../helpers/genresNameToString';

export const Search = ({ isFetching, type }) => {
	const {
		resetFilters,
		setFilterGenre,
		setFilterRatings,
		setFilterYears,
		setFilterLength,
		setSort,
		// setSortByRelease,
	} = useActions();
	const currentYear = getCurrentYear();
	console.log('rerender');

	const { data: genres, error } = useGetFilmsGenresQuery(type);
	const sorting = [
		{ label: 'Популярністю спад', value: 'popularity.desc' },
		{ label: 'Популярністю зрос', value: 'popularity.asc' },
		{ label: 'Назвою спад', value: 'original_title.desc' },
		{ label: 'Назвою зрос', value: 'original_title.asc' },
		{ label: 'Рейтингом спад', value: 'vote_average.asc' },
		{ label: 'Рейтингом зрос', value: 'vote_average.desc' },
	];

	useEffect(() => {
		resetFilters();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.filters}>
			<Formik
				initialValues={{
					rating: [1, 10],
					year: [1900, currentYear],
					length: [0, 400],
					sortBy: sorting[0],
					// genres: genres[0],
					// sort: '-1',
				}}
				// validate={(values) => {
				// 	const errors = {};
				// 	if (!values.email) {
				// 		errors.email = 'Required';
				// 	} else if (
				// 		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				// 	) {
				// 		errors.email = 'Invalid email address';
				// 	}
				// 	return errors;
				// }}

				onSubmit={(values) => {
					console.log(values);
					const { sortBy, rating, year, genres = [], length } = values;
					console.log(sortBy);
					// const ratingString = `${rating[0]}-${rating[1]}`;
					// const yearString = `${year[0]}-${year[1]}`;
					// const ratings = rating[0] !== rating[1] ? ratingString : rating[0];
					// const years = year[0] !== year[1] ? yearString : year[0];
					const genresId = genres.map((genre) => genre.value);
					const genre = genresId.length > 0 ? genresId.join(',') : '';
					//
					setPage(1);
					setFilterRatings(rating);
					setFilterYears(year);
					setFilterLength(length);
					setSort(sortBy.value);
					setFilterGenre(genre);
					console.log('Submit');
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth', //'smooth' для плавного прокруту
					});
				}}
				// onReset={(values, formikHelpers) => {
				// 	console.log(values, formikHelpers);
				// }}
			>
				{({
					values,
					// errors,
					// touched,
					// handleChange,
					// handleBlur,
					handleSubmit,
					handleReset,
					isSubmitting,
					/* and other goodies */
				}) => (
					<form onSubmit={handleSubmit}>
						<div className={styles.choice}>
							<span className={styles.state}>
								Рейтинг: {values.rating[0]} - {values.rating[1]}
							</span>
						</div>
						<div className={styles.choice}>
							<span className={styles.state}>
								Рік виробництва: {values.year[0]} - {values.year[1]}
							</span>
						</div>
						<div className={styles.choice}>
							<span className={styles.state}>
								Жанри: {genresNameToString(values.genres)}
							</span>
						</div>
						{/*<div className={styles.choice}>*/}
						{/*	<span className={styles.state}>*/}
						{/*		Рік випуску:{' '}*/}
						{/*		{values.sort === '-1' ? 'Спочатку нові' : 'Спочатку старі'}*/}
						{/*	</span>*/}
						{/*</div>*/}

						<Accordeon title={'Рейтинг'}>
							<RangeBlock step={1} min={1} max={10} name='rating' />
						</Accordeon>

						<Accordeon title={'Рік випуску'}>
							<RangeBlock step={1} min={1900} max={currentYear} name='year' />
						</Accordeon>

						<Accordeon title={'Жанри'}>
							<Select
								options={genres}
								name='genres'
								placeholder={'Оберіть жанри'}
								isMulti
							/>
						</Accordeon>
						<Accordeon title={'Сортувати'}>
							<Select
								options={sorting}
								name='sortBy'
								placeholder={'Сортувати результати за'}
							/>
						</Accordeon>

						<Accordeon title={'Тривалість'}>
							<RangeBlock step={10} min={0} max={400} name='length' />
						</Accordeon>

						{/*<Accordeon title={'Рік випуску'}>*/}
						{/*	<Radio*/}
						{/*		label='Спочатку нові'*/}
						{/*		type='radio'*/}
						{/*		name='sort'*/}
						{/*		value='-1'*/}
						{/*	/>*/}
						{/*	<Radio*/}
						{/*		label='Спочатку старі'*/}
						{/*		name='sort'*/}
						{/*		type='radio'*/}
						{/*		value='1'*/}
						{/*	/>*/}
						{/*</Accordeon>*/}

						<div className={styles.btns}>
							<Button
								type='submit'
								className={styles.btn}
								disabled={isFetching}
							>
								<span>Застосувати</span>
							</Button>
							<Button
								className={`${styles.btn} ${styles.btn_trans}`}
								onClick={handleReset}
							>
								<span>Скинути</span>
							</Button>
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
};
