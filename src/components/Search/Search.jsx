import { translateMovieType } from '../../helpers/translateMovieType';
import styles from './Search.module.scss';
import { SliderRange } from '../UI/SliderRange/SliderRange';

export const Search = ({ type }) => {
	const template = translateMovieType(type);

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
						<SliderRange />
					</div>
					<div className={styles.results}>results</div>
				</div>
			</div>
		</div>
	);
};
