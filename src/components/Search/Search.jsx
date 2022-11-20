import { translateMovieType } from '../../helpers/translateMovieType';
import styles from './Search.module.scss';
import { useState } from 'react';
import { Accordeon } from '../UI/Accordeon/Accordeon';
import { RangeBlock } from '../UI/RangeBlock/RangeBlock';
import { Select } from '../UI/Select/Select';
import { Radio } from '../UI/Radio/Radio';
import { Formik } from 'formik';
import { getCurrentYear } from '../../helpers/getCurrentYear';
import { SearchInput } from '../UI/SearchInput/SearchInput';
import { Button } from '../common/Button/Button';

export const Search = ({ type }) => {
	const template = translateMovieType(type);
	const currentYear = getCurrentYear();

	const genres = [
		{ label: 'Всі жанри', value: '' },
		{ label: 'Сімейні', value: 'семейный' },
		{ label: 'Біографії', value: 'биография' },
		{ label: 'Бойовики', value: 'боевик' },
		{ label: 'Вестерни', value: 'вестерн' },
		{ label: 'Воєнні', value: 'военный' },
		{ label: 'Детективи', value: 'детектив' },
		{ label: 'Дитячі', value: 'детский' },
		{ label: 'Документальні', value: 'документальный' },
		{ label: 'Драми', value: 'драма' },
		{ label: 'Історичні', value: 'история' },
		{ label: 'Комедії', value: 'комедия' },
		{ label: 'Короткометражки', value: 'короткометражка' },
		{ label: 'Кримінал', value: 'криминал' },
		{ label: 'Мелодрами', value: 'мелодрама' },
		{ label: 'Музичні', value: 'музыка' },
		{ label: 'Мюзикли', value: 'мюзикл' },
		{ label: 'Новини', value: 'новости' },
		{ label: 'Пригоди', value: 'приключения' },
		{ label: 'Спортивні', value: 'спорт' },
		{ label: 'Триллери', value: 'триллер' },
		{ label: 'Жахи', value: 'ужасы' },
		{ label: 'Фантастика', value: 'фантастика' },
		{ label: 'Фільми-нуар', value: 'фильм-нуар' },
		{ label: 'Фентезі', value: 'фэнтези' },
	];

	return (
		<div className={styles.main}>
			<div className={`wrapper ${styles.inner}`}>
				<h1>{type === 'favourites' ? 'Обране' : `Всі ${template.naz}`}</h1>
				<p className={styles.subtitle}>
					{type === 'favourites'
						? 'Список обраного кіно'
						: `Підбірка ${template.rod} всього світу`}
				</p>
				<div className={styles.body}>
					<div className={styles.filters}>
						<Formik
							initialValues={{
								rating: [1, 10],
								year: [1960, currentYear],
								genres: genres[0],
								sort: '-1',
								test: 'test1',
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
							}}
						>
							{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
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
											Жанр: {values.genres.label}
										</span>
									</div>
									<div className={styles.choice}>
										<span className={styles.state}>
											Рік випуску:{' '}
											{values.sort === '-1'
												? 'Спочатку нові'
												: 'Спочатку старі'}
										</span>
									</div>

									<Accordeon title={'Рейтинг'}>
										<RangeBlock step={1} min={1} max={10} name='rating' />
									</Accordeon>

									<Accordeon title={'Рік виробництва'}>
										<RangeBlock
											step={1}
											min={1960}
											max={currentYear}
											name='year'
										/>
									</Accordeon>

									<Accordeon title={'Жанри'}>
										<Select options={genres} name='genres' />
									</Accordeon>

									{/*<Accordeon title={'Тест'}>*/}
									{/*	<SearchInput*/}
									{/*		label='Тест'*/}
									{/*		// value={values.test}*/}
									{/*		// onChange={props.onChange}*/}
									{/*		name='test'*/}
									{/*	/>*/}
									{/*</Accordeon>*/}

									<Accordeon title={'Рік випуску'}>
										<Radio
											label='Спочатку нові'
											type='radio'
											name='sort'
											value='-1'
										/>
										<Radio
											label='Спочатку старі'
											name='sort'
											type='radio'
											value='1'
										/>
									</Accordeon>
									{/*<input*/}
									{/*	type='email'*/}
									{/*	onChange={handleChange}*/}
									{/*	onBlur={handleBlur}*/}
									{/*	value={values.email}*/}
									{/*/>*/}
									{/*/!*{errors.email && touched.email && errors.email}*!/*/}
									{/*<input*/}
									{/*	type='password'*/}
									{/*	name='password'*/}
									{/*	onChange={handleChange}*/}
									{/*	onBlur={handleBlur}*/}
									{/*	value={values.password}*/}
									{/*/>*/}
									{/*{errors.password && touched.password && errors.password}*/}
									{/*<button type='submit' disabled={isSubmitting}>*/}
									{/*	Submit*/}
									{/*</button>*/}
									<div className={styles.btns}>
										<Button
											type='submit'
											disabled={isSubmitting}
											className={styles.btn}
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
					<div className={styles.results}>results</div>
				</div>
			</div>
		</div>
	);
};
