import { useGetSimilarMediaQuery } from '../../../redux/API/filmsAPI';
import { Carousel } from '../../Swiper/Swiper';
import { Card } from '../../Catalog/Item/Card';
import { translateMovieType } from '../../../helpers/translateMovieType';
import { SkeletonCard } from '../../Catalog/Item/SkeletonCards';

export const SimilarMedia = ({ mediaId: id, mediaType: type }) => {
	const { data, isFetching } = useGetSimilarMediaQuery({ id, type });

	const similar = isFetching
		? new Array(5).fill().map((_, index) => <SkeletonCard key={index} />)
		: data.map((item) => <Card key={id} type={type} item={item} />);

	return (
		<>
			<h3>
				Схожі {translateMovieType(type).naz} ({!isFetching && data.length})
			</h3>
			<Carousel items={similar} />
		</>
	);
};
