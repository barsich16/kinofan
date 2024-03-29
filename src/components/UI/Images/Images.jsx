import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import lgZoom from 'lightgallery/plugins/zoom';
import styles from './Images.module.scss';
import { useGetImagesQuery } from '../../../redux/API/filmsAPI';
import { Loader } from '../../Loader/Loader';

export const Images = ({ id, type }) => {
	const { data, isFetching } = useGetImagesQuery({ id, type });
	if (isFetching) return <Loader />;

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
