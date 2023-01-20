import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import lgZoom from 'lightgallery/plugins/zoom';
import styles from './Images.module.scss';
import { useGetImagesQuery } from '../../../redux/API/filmsAPI';

export const Images = ({ id, type }) => {
	const { data, error, isFetching } = useGetImagesQuery({ id, type });
	if (!data) return 'гружу...';

	return (
		<LightGallery
			plugins={[lgZoom]}
			download={false}
			elementClassNames={styles.wrapper}
			speed={500}
		>
			{data?.map((image, idx) => {
				const path = `https://image.tmdb.org/t/p/w300${image.file_path}`;
				return (
					<a className={styles.item} key={idx} href={path}>
						<img layout='fill' className={styles.image} src={path} alt='' />
					</a>
				);
			})}
		</LightGallery>
	);
};
