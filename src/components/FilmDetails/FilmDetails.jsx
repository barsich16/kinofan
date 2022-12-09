import styles from './FilmDetails.module.scss';
import { ReactComponent as ArrowLeft } from '../../assets/img/arrow-left.svg';
import { Button } from '../common/Button/Button';
import { Carousel } from '../Swiper/Swiper';
import { useParams } from 'react-router-dom';
import { useGetFilmByIdQuery } from '../../redux/API/filmsAPI';

//Film
// {
// 	"adult": false,
// 	"backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
// 	"belongs_to_collection": null,
// 	"budget": 200000000,
// 	"genres": [
// 	{
// 		"id": 28,
// 		"name": "Бойовик"
// 	},
// 	{
// 		"id": 14,
// 		"name": "Фентезі"
// 	},
// 	{
// 		"id": 878,
// 		"name": "Фантастика"
// 	}
// ],
// 	"homepage": "",
// 	"id": 436270,
// 	"imdb_id": "tt6443346",
// 	"original_language": "en",
// 	"original_title": "Black Adam",
// 	"overview": "Минуло майже 5000 років відтоді, як стародавні боги зробили Чорного Адама всемогутнім. І відразу ж запроторили до в’язниці. Проте він звільниться зі своєї земної гробниці і покаже сучасному світові власну унікальну форму правосуддя.",
// 	"popularity": 5735.977,
// 	"poster_path": "/yh5OPOHEBOHqGmronG3r4JZvRKJ.jpg",
// 	"production_companies": [
// 	{
// 		"id": 12,
// 		"logo_path": "/iaYpEp3LQmb8AfAtmTvpqd4149c.png",
// 		"name": "New Line Cinema",
// 		"origin_country": "US"
// 	},
// 	{
// 		"id": 34081,
// 		"logo_path": null,
// 		"name": "Flynn Picture Company",
// 		"origin_country": "US"
// 	},
// 	{
// 		"id": 73669,
// 		"logo_path": "/7tmSGstK3KwgcDIuBYLTAayjit9.png",
// 		"name": "Seven Bucks Productions",
// 		"origin_country": "US"
// 	},
// 	{
// 		"id": 128064,
// 		"logo_path": "/13F3Jf7EFAcREU0xzZqJnVnyGXu.png",
// 		"name": "DC Films",
// 		"origin_country": "US"
// 	}
// ],
// 	"production_countries": [
// 	{
// 		"iso_3166_1": "US",
// 		"name": "United States of America"
// 	}
// ],
// 	"release_date": "2022-10-19",
// 	"revenue": 384571691,
// 	"runtime": 125,
// 	"spoken_languages": [
// 	{
// 		"english_name": "English",
// 		"iso_639_1": "en",
// 		"name": "English"
// 	}
// ],
// 	"status": "Released",
// 	"tagline": "Світу був потрібен герой, а прийшов Чорний Адам",
// 	"title": "Чорний Адам",
// 	"video": false,
// 	"vote_average": 7.309,
// 	"vote_count": 2573
// }

//Series
//{
//     "adult": false,
//     "backdrop_path": "/sNLP0dLZcVBqYa3MchCXJqgDtFb.jpg",
//     "created_by": [
//         {
//             "id": 18923,
//             "credit_id": "602e00776743fa003ce65015",
//             "name": "Miles Millar",
//             "gender": 2,
//             "profile_path": "/isLcN8MJ3ARpmTwoGtqRQsVwJqx.jpg"
//         },
//         {
//             "id": 18924,
//             "credit_id": "602e0072d55697003f5a8765",
//             "name": "Alfred Gough",
//             "gender": 2,
//             "profile_path": "/vzIbjeI1quQTFpxOR5wEyEHddgN.jpg"
//         }
//     ],
//     "episode_run_time": [],
//     "first_air_date": "2022-11-23",
//     "genres": [
//         {
//             "id": 10765,
//             "name": "Науково фантастичний"
//         },
//         {
//             "id": 9648,
//             "name": "Детектив"
//         },
//         {
//             "id": 35,
//             "name": "Комедія"
//         }
//     ],
//     "homepage": "https://www.netflix.com/title/81231974",
//     "id": 119051,
//     "in_production": true,
//     "languages": [
//         "en"
//     ],
//     "last_air_date": "2022-11-23",
//     "last_episode_to_air": {
//         "air_date": "2022-11-23",
//         "episode_number": 8,
//         "id": 3901544,
//         "name": "Серія 8",
//         "overview": "",
//         "production_code": "",
//         "runtime": 53,
//         "season_number": 1,
//         "show_id": 119051,
//         "still_path": "/3b42P1FuxWC9JXVIfnKAUUuq0zP.jpg",
//         "vote_average": 8.8,
//         "vote_count": 29
//     },
//     "name": "Венздей",
//     "next_episode_to_air": null,
//     "networks": [
//         {
//             "id": 213,
//             "name": "Netflix",
//             "logo_path": "/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
//             "origin_country": ""
//         }
//     ],
//     "number_of_episodes": 8,
//     "number_of_seasons": 1,
//     "origin_country": [
//         "US"
//     ],
//     "original_language": "en",
//     "original_name": "Wednesday",
//     "overview": "Венздей Аддамс - дочка Мортіші та Гомеса Аддамсів. Після відрахування з восьми різних шкіл втона вирушає до академії Невермор. Крім навчання, вона розгадує таємниці, використовуючи свої екстрасенсорні здібності.",
//     "popularity": 8669.948,
//     "poster_path": "/fxdmavV2ojr73fXRHtBytWHit3g.jpg",
//     "production_companies": [
//         {
//             "id": 2230,
//             "logo_path": "/8UHPNZnCf2gfHs9DrSvJMa8t7Ry.png",
//             "name": "MGM Television",
//             "origin_country": "US"
//         },
//         {
//             "id": 20356,
//             "logo_path": null,
//             "name": "Millar Gough Ink",
//             "origin_country": ""
//         },
//         {
//             "id": 186866,
//             "logo_path": null,
//             "name": "Toluca Pictures",
//             "origin_country": "US"
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "US",
//             "name": "United States of America"
//         }
//     ],
//     "seasons": [
//         {
//             "air_date": "2022-11-23",
//             "episode_count": 8,
//             "id": 182137,
//             "name": "Сезон 1",
//             "overview": "",
//             "poster_path": "/ajACh2JtjPOS2jJFhuD30gI1o8a.jpg",
//             "season_number": 1
//         }
//     ],
//     "spoken_languages": [
//         {
//             "english_name": "English",
//             "iso_639_1": "en",
//             "name": "English"
//         }
//     ],
//     "status": "Returning Series",
//     "tagline": "",
//     "type": "Scripted",
//     "vote_average": 8.804,
//     "vote_count": 2225
// }

export const FilmDetails = ({ type }) => {
	const { id } = useParams();
	const { data, error, isFetching } = useGetFilmByIdQuery({ id, type });
	console.log(data);

	if (!data) {
		return 'Завантаження...';
	}

	// const {
	// 	title,
	// 	original_title,
	// 	overview,
	// 	poster_path,
	// 	release_date,
	// 	vote_average,
	// 	// rating,
	// 	// budget,
	// 	// fees,
	// 	// type,
	// 	// description,
	// 	// slogan,
	// 	// year,
	// 	// genres,
	// 	// countries,
	// 	// alternativeName,
	// 	// poster,
	// } = data;
	const {
		overview: desc,
		title: filmName,
		name: seriesName,
		vote_average: rating,
		release_date: filmDate,
		first_air_date: seriesDate,
		original_title: originalFilmName,
		original_name: originalSeriesName,
		// movieLength,
		poster_path,
	} = data;
	const name = filmName || seriesName;
	const originalName = originalFilmName || originalSeriesName;
	const date = filmDate || seriesDate;
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
						<span>{rating.toFixed(1)}</span>
					</div>

					<div className={styles.description}>
						<h1>
							{name} {date.slice(0, 4)}
						</h1>
						<span className={styles.film_name}>{originalName}</span>
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
