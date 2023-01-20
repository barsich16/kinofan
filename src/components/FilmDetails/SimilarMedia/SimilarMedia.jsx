import {
	useGetActorsQuery,
	useGetSimilarMediaQuery,
} from '../../../redux/API/filmsAPI';
import { Carousel } from '../../Swiper/Swiper';
import { Card } from '../../Catalog/Item/Card';
import { translateMovieType } from '../../../helpers/translateMovieType';

export const SimilarMedia = ({ mediaId: id, mediaType: type }) => {
	const { data, error, isFetching } = useGetSimilarMediaQuery({ id, type });
	if (!data) return 'загрузка';
	console.log(data);

	const similar = data.map((item) => <Card key={id} type={type} item={item} />);

	// return <Card key={id} photo={data[0].profile_path} />;
	return (
		<>
			<h3>
				Схожі {translateMovieType(type).naz} ({data.length})
			</h3>
			<Carousel items={similar} />
		</>
	);
	// return <div>{similar[0]}</div>;
};
