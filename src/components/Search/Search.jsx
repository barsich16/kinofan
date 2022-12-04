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

export const Search = ({ isFetching, type }) => {
	const {
		resetFilters,
		setFilterGenre,
		setFilterRatings,
		setFilterYears,
		setSortByRelease,
	} = useActions();
	const currentYear = getCurrentYear();

	const { data: genres, error } = useGetFilmsGenresQuery(type);

	// const genres = [
	// 	{ label: 'Всі жанри', value: '' },
	// 	{ label: 'Сімейні', value: 'семейный' },
	// 	{ label: 'Біографії', value: 'биография' },
	// 	{ label: 'Бойовики', value: 'боевик' },
	// 	{ label: 'Вестерни', value: 'вестерн' },
	// 	{ label: 'Воєнні', value: 'военный' },
	// 	{ label: 'Детективи', value: 'детектив' },
	// 	{ label: 'Дитячі', value: 'детский' },
	// 	{ label: 'Документальні', value: 'документальный' },
	// 	{ label: 'Драми', value: 'драма' },
	// 	{ label: 'Історичні', value: 'история' },
	// 	{ label: 'Комедії', value: 'комедия' },
	// 	{ label: 'Короткометражки', value: 'короткометражка' },
	// 	{ label: 'Кримінал', value: 'криминал' },
	// 	{ label: 'Мелодрами', value: 'мелодрама' },
	// 	{ label: 'Музичні', value: 'музыка' },
	// 	{ label: 'Мюзикли', value: 'мюзикл' },
	// 	{ label: 'Новини', value: 'новости' },
	// 	{ label: 'Пригоди', value: 'приключения' },
	// 	{ label: 'Спортивні', value: 'спорт' },
	// 	{ label: 'Триллери', value: 'триллер' },
	// 	{ label: 'Жахи', value: 'ужасы' },
	// 	{ label: 'Фантастика', value: 'фантастика' },
	// 	{ label: 'Фільми-нуар', value: 'фильм-нуар' },
	// 	{ label: 'Фентезі', value: 'фэнтези' },
	// ];

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
					const { sort, rating, year, genres } = values;

					// const ratingString = `${rating[0]}-${rating[1]}`;
					// const yearString = `${year[0]}-${year[1]}`;
					// const ratings = rating[0] !== rating[1] ? ratingString : rating[0];
					// const years = year[0] !== year[1] ? yearString : year[0];
					// const genre =
					// 	genres.value !== ''
					// 		? `search[]=${genres.value}&field[]=genres.name`
					// 		: '';
					// console.log(values);
					//
					// setPage(1);
					// setFilterRatings(ratings);
					// setFilterYears(years);
					// setSortByRelease(sort);
					// setFilterGenre(genre);
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
						{/*<div className={styles.choice}>*/}
						{/*	<span className={styles.state}>*/}
						{/*		{isSubmitting}Рейтинг: {values.rating[0]} - {values.rating[1]}*/}
						{/*	</span>*/}
						{/*</div>*/}
						{/*<div className={styles.choice}>*/}
						{/*	<span className={styles.state}>*/}
						{/*		Рік виробництва: {values.year[0]} - {values.year[1]}*/}
						{/*	</span>*/}
						{/*</div>*/}
						{/*<div className={styles.choice}>*/}
						{/*	<span className={styles.state}>Жанр: {values.genres.label}</span>*/}
						{/*</div>*/}
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
							<Select options={genres} name='genres' />
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
