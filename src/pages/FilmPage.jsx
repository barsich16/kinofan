import { FilmDetails } from '../components/FilmDetails/FilmDetails';
import { useParams } from 'react-router-dom';
import { useGetFilmByIdQuery } from '../redux/API/filmsAPI';
import { convertDate } from '../helpers/convertDate';

export const FilmPage = ({ type }) => {
	const { id } = useParams();

	const { data, isFetching } = useGetFilmByIdQuery({ id, type });

	const getOptions = (type) => {
		const typeMedia = type;

		return (data) => {
			const {
				vote_average: rating,
				genres,
				budget,
				premier_date,
				runtime,
				production_companies,
				number_of_seasons,
				number_of_episodes,
			} = data;

			const additional =
				typeMedia === 'movie'
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
				...additional,
			];

			return options;
		};
	};

	return (
		<>
			<FilmDetails
				type={type}
				data={data}
				id={id}
				getOptions={getOptions(type)}
				isFetching={isFetching}
			/>
		</>
	);
};
