import styles from './FilmDetails.module.scss';
import { ReactComponent as ArrowLeft } from '../../assets/img/arrow-left.svg';
import { Button } from '../common/Button/Button';
import { Carousel } from '../Swiper/Swiper';
import { useParams, useNavigate, ScrollRestoration } from 'react-router-dom';
import { useGetFilmByIdQuery } from '../../redux/API/filmsAPI';
import { convertDate } from '../../helpers/convertDate';
import { Tabs } from '../UI/Tabs/Tabs';
import { Actors } from './Actors/Actors';
import { Images } from '../UI/Images/Images';
import { useAutoScrollToTop } from '../../hooks/useAutoScrollToTop';
import { SimilarMedia } from './SimilarMedia/SimilarMedia';

const Option = ({ option }) => {
	const { name, value } = option;
	return (
		<li className={styles.info_item}>
			<span className={styles.info_name}>{name}</span>
			<span className={styles.info_value}>{value}</span>
		</li>
	);
};

export const FilmDetails = ({ type, data, id, options }) => {
	const navigate = useNavigate();

	useAutoScrollToTop();

	const { overview, name, rating, original_name, poster_path, year } = data;

	const tabs = [
		{ title: 'Опис', children: overview },
		{ title: 'Актори', children: <Actors mediaId={id} mediaType={type} /> },
		{ title: 'Постери', children: <Images id={id} type={type} /> },
	];

	return (
		<div className={styles.details}>
			<div className={`${styles.inner}`}>
				<a href='#' className={styles.return} onClick={() => navigate(-1)}>
					<ArrowLeft width={18} /> <span>Назад</span>
				</a>

				<div className={styles.info}>
					<div className={styles.image_block}>
						<img
							src={`https://image.tmdb.org/t/p/w500${poster_path}`}
							alt='Image'
							className={styles.poster}
						/>
						<span>{rating}</span>
					</div>

					<div className={styles.description}>
						<h1>
							{name} <span className={styles.year}>{year}</span>
						</h1>

						<span className={styles.film_name}>{original_name}</span>
						<div className={styles.btns}>
							<Button
								className={`${styles.button} ${styles.button__blue}`}
								onClick={() => alert('Функціонал ще в розробці...')}
							>
								Дивитиcя
							</Button>
							<Button
								className={`${styles.button} ${styles.button__gray}`}
								onClick={() => alert('Функціонал ще в розробці...')}
							>
								Буду дивитиcя
							</Button>
						</div>
						<h2 className={styles.title}>Про фільм</h2>
						<ul className={styles.info_list}>
							{options.map((item, index) => (
								<Option key={index} option={item} />
							))}
						</ul>
					</div>
				</div>

				<Tabs defaultActiveKey={1} items={tabs} />
				<SimilarMedia mediaId={id} mediaType={type} />
			</div>
		</div>
	);
};
