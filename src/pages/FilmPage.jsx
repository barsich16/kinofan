import { FilmDetails } from '../components/FilmDetails/FilmDetails';
import { useParams } from 'react-router-dom';
import { useGetFilmByIdQuery } from '../redux/API/filmsAPI';
import { convertDate } from '../helpers/convertDate';
import { Actors } from '../components/FilmDetails/Actors/Actors';
import { Images } from '../components/UI/Images/Images';

export const FilmPage = ({ type }) => {
	const { id } = useParams();

	const { data, error, isFetching } = useGetFilmByIdQuery({ id, type });
	if (!data) {
		return 'Завантаження...';
	}

	const {
		vote_average: rating,
		genres,
		budget,
		premier_date,
		runtime,
		production_companies,
		number_of_seasons,
		number_of_episodes,
		...details
	} = data;

	console.log(rating);

	const additionalOptions =
		type === 'movie'
			? [
					{
						name: 'Бюджет',
						value:
							'$' +
							' ' +
							budget.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '),
					},
					{ name: 'Час', value: runtime + ' хв' },
			  ]
			: [
					{
						name: 'Сезони',
						value: number_of_seasons,
					},
					{
						name: 'Епізоди',
						value: number_of_episodes,
					},
			  ];

	const options = [
		{ name: 'Жанри', value: genres.map((item) => item.name).join(', ') },
		{ name: "Прем'єра", value: convertDate(premier_date) },
		{ name: 'Рейтинг', value: rating },
		{
			name: 'Компанії',
			value: production_companies.map((item) => item.name).join(', '),
		},
		...additionalOptions,
	];

	return (
		<>
			<FilmDetails
				type={type}
				data={{ rating, ...details }}
				id={id}
				options={options}
			/>
		</>
	);
};
