import styles from './FilmDetails.module.scss';
import { ReactComponent as ArrowLeft } from '../../assets/img/arrow-left.svg';
import { Button } from '../common/Button/Button';
import { Carousel } from '../Swiper/Swiper';
import { useParams } from 'react-router-dom';
import { useGetFilmByIdQuery } from '../../redux/API/filmsAPI';
export const FilmDetails = () => {
	const { id } = useParams();
	const { data, error, isFetching } = useGetFilmByIdQuery(id);

	if (!data) {
		return 'Завантаження...';
	}

	const {
		title,
		original_title,
		overview,
		poster_path,
		release_date,
		vote_average,
		// rating,
		// budget,
		// fees,
		// type,
		// description,
		// slogan,
		// year,
		// genres,
		// countries,
		// alternativeName,
		// poster,
	} = data;
	return (
		<div className={styles.details}>
			<div className={`wrapper ${styles.inner}`}>
				<a href='#' className={styles.return}>
					<ArrowLeft width={18} /> <span>Назад</span>
				</a>

				<div className={styles.info}>
					<div className={styles.image_block}>
						<img
							src={`https://image.tmdb.org/t/p/w500${poster_path}`}
							alt='Image'
							className={styles.poster}
						/>
						<span>{vote_average.toFixed(1)}</span>
					</div>

					<div className={styles.description}>
						<h1>
							{title || original_title} {release_date.slice(0, 4)}
						</h1>
						<span className={styles.film_name}>{original_title}</span>
						<div className={styles.btns}>
							<Button className={`${styles.button} ${styles.button__blue}`}>
								Дивитиcя
							</Button>
							<Button className={`${styles.button} ${styles.button__gray}`}>
								Буду дивитиcя
							</Button>
						</div>
						<h2>Про фільм</h2>
						<ul className={styles.info_list}>
							<li className={styles.info_item}>
								<span className={styles.info_name}>Країни</span>
								<span className={styles.info_value}>Доробить</span>
							</li>
							<li className={styles.info_item}>
								<span className={styles.info_name}>Жанр</span>
								<span className={styles.info_value}>
									детектив, кримінал, драма, бойовик
								</span>
							</li>
						</ul>
					</div>
				</div>

				<div className='pc-tab'>
					{/*<input defaultChecked={true} id='tab1' type='radio' name='pct' />*/}
					{/*<input id='tab2' type='radio' name='pct' />*/}
					{/*<input id='tab3' type='radio' name='pct' />*/}
					<div className='tabs'>
						<ul>
							<li className='selected'>First Tab</li>
							<li>Second Tab</li>
							<li className='tab3'>Third Tab</li>
						</ul>
					</div>
					<div className='tab1'>
						<h2>First</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Repellendus itaque quidem minus nostrum, voluptatem accusamus
							aspernatur quia harum ratione, officia laudantium inventore autem
							doloribus atque labore numquam non. Hic, animi.
						</p>
					</div>
				</div>

				<div className={styles.same_film}>
					<h3>Схожі фільми (7)</h3>
					<Carousel />
				</div>
			</div>
		</div>
	);
};
