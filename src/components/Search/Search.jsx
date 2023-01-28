import styles from './Search.module.scss';
import { useEffect } from 'react';
import { Accordeon } from '../UI/Accordeon/Accordeon';
import { RangeBlock } from '../UI/RangeBlock/RangeBlock';
import { Select } from '../UI/Select/Select';
import { Formik } from 'formik';
import { getCurrentYear } from '../../helpers/getCurrentYear';
import { Button } from '../common/Button/Button';
import { useActions } from '../../hooks/useActions';
import { useGetFilmsGenresQuery } from '../../redux/API/filmsAPI';
import { genresNameToString } from '../../helpers/genresNameToString';
import { GrClose } from 'react-icons/gr';

export const Search = ({ isFetching, type, visible, setVisible }) => {
	const { resetFilters, setPage, setFilters } = useActions();
	const currentYear = getCurrentYear();

	const { data: genres, error } = useGetFilmsGenresQuery(type);
	const sorting = [
		{ label: 'Популярністю (спадання)', value: 'popularity.desc' },
		{ label: 'Популярністю (зростання)', value: 'popularity.asc' },
		{ label: 'Назвою (спадання)', value: 'original_title.desc' },
		{ label: 'Назвою (зростання)', value: 'original_title.asc' },
		{ label: 'Рейтингом (спадання)', value: 'vote_average.desc' },
		{ label: 'Рейтингом (зростання)', value: 'vote_average.asc' },
	];

	const accordeons = [
		{
			title: 'Рейтинг',
			children: <RangeBlock step={1} min={1} max={10} name='rating' />,
		},
		{
			title: 'Рік випуску',
			children: (
				<RangeBlock step={1} min={1900} max={currentYear} name='year' />
			),
		},
		{
			title: 'Жанри',
			children: (
				<Select
					options={genres}
					name='genres'
					placeholder={'Оберіть жанри'}
					isMulti
				/>
			),
		},
		{
			title: 'Сортувати за',
			children: (
				<Select
					options={sorting}
					name='sortBy'
					placeholder={'Сортувати результати за'}
				/>
			),
		},
		{
			title: 'Тривалість',
			children: <RangeBlock step={10} min={0} max={400} name='length' />,
		},
	];

	const getChoices = (values) => {
		return [
			{ name: 'Рейтинг', value: `${values.rating[0]} - ${values.rating[1]}` },
			{
				name: 'Рік виробництва',
				value: `${values.year[0]} - ${values.year[1]}`,
			},
			{ name: 'Жанри', value: `${genresNameToString(values.genres)}` },
		];
	};

	useEffect(() => {
		resetFilters();
	}, []);

	useEffect(() => {
		if (visible) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [visible]);

	return (
		<Formik
			initialValues={{
				rating: [1, 10],
				year: [1900, currentYear],
				length: [0, 400],
				sortBy: sorting[0],
			}}
			onSubmit={(values) => {
				const { genres = [], sortBy } = values;
				const genresId = genres.map((genre) => genre.value);
				const genre = genresId.length > 0 ? genresId.join(',') : '';

				setPage(1);
				setFilters({ ...values, genre, sortBy: sortBy.value });

				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth', //'smooth' для плавного прокруту
				});
			}}
		>
			{({ values, handleSubmit, handleReset }) => (
				<form
					onSubmit={handleSubmit}
					className={`${styles.form} ${visible ? styles.visible : ''}`}
				>
					<div className={styles.header}>
						<Button className={styles.reset} onClick={handleReset}>
							<span>Скинути</span>
						</Button>
						<h2>Фільтри</h2>
						<GrClose onClick={() => setVisible(false)} />
					</div>
					<div className={styles.settings}>
						<div className={styles.choices}>
							{getChoices(values).map(({ name, value }) => (
								<div className={styles.choice} key={name}>
									<span className={styles.state}>
										{name}: {value}
									</span>
								</div>
							))}
						</div>

						{accordeons.map(({ title, children }, index) => (
							<Accordeon key={index} title={title}>
								{children}
							</Accordeon>
						))}
					</div>

					<div className={styles.btns}>
						<Button
							type='submit'
							className={styles.btn}
							disabled={isFetching}
							onClick={() => setVisible(false)}
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
	);
};
