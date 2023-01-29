import styles from './FilmDetails.module.scss';
import { Button } from '../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Tabs } from '../UI/Tabs/Tabs';
import { Actors } from './Actors/Actors';
import { Images } from '../UI/Images/Images';
import { useAutoScrollToTop } from '../../hooks/useAutoScrollToTop';
import { SimilarMedia } from './SimilarMedia/SimilarMedia';
import Skeleton from 'react-loading-skeleton';
import { FiChevronLeft } from 'react-icons/fi';

const Option = ({ option }) => {
	const { name, value } = option;
	return (
		<li className={styles.info_item}>
			<span className={styles.info_name}>{name}</span>
			<span className={styles.info_value}>{value}</span>
		</li>
	);
};

export const FilmDetails = ({ type, data, id, getOptions, isFetching }) => {
	const navigate = useNavigate();

	useAutoScrollToTop();

	const details = data ?? {};
	const {
		overview,
		name,
		vote_average: rating,
		original_name,
		poster_path,
		year,
	} = details;

	const tabs = [
		{ title: 'Опис', children: overview },
		{ title: 'Актори', children: <Actors mediaId={id} mediaType={type} /> },
		{ title: 'Постери', children: <Images id={id} type={type} /> },
	];

	return (
		<div className={styles.details}>
			<div className={`${styles.inner}`}>
				<span className={styles.return} onClick={() => navigate(-1)}>
					<FiChevronLeft /> <span>Назад</span>
				</span>

				<div className={styles.info}>
					{isFetching ? (
						<SkeletonDetails />
					) : (
						<>
							<div className={styles.image_block}>
								<img
									src={`https://image.tmdb.org/t/p/w500${poster_path}`}
									alt={name}
									className={styles.poster}
								/>
								<span className={styles.rating}>{rating}</span>
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
									{getOptions(details).map((item, index) => (
										<Option key={index} option={item} />
									))}
								</ul>
							</div>
						</>
					)}
				</div>

				<Tabs defaultActiveKey={1} items={tabs} />
				<SimilarMedia mediaId={id} mediaType={type} />
			</div>
		</div>
	);
};

const SkeletonDetails = () => {
	return (
		<>
			<div className={styles.image_block}>
				<Skeleton
					height='100%'
					className={`${styles.poster} ${styles.skeleton}`}
				/>
			</div>

			<div className={styles.description}>
				<h1>
					<Skeleton />
				</h1>

				<span className={styles.film_name}>
					<Skeleton width={300} />
				</span>
				<h2 className={styles.title}>
					<Skeleton width={140} />
				</h2>
				<ul className={styles.info_list}>
					{new Array(5).fill().map((_, index) => (
						<li className={styles.info_item} key={index}>
							<span className={styles.info_name}>
								<Skeleton />
							</span>
							<span className={styles.info_value}>
								<Skeleton width={200} />
							</span>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
