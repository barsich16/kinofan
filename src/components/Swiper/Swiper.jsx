// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Swiper.module.scss';

import { Navigation } from 'swiper';

const breakpoints = {
	320: {
		slidesPerGroup: 2,
		slidesPerView: 2,
		spaceBetween: 10,
	},
	577: {
		slidesPerGroup: 3,
		slidesPerView: 3,
		spaceBetween: 15,
	},
	769: {
		slidesPerGroup: 3,
		slidesPerView: 3,
		spaceBetween: 30,
	},
	1025: {
		slidesPerGroup: 4,
		slidesPerView: 4,
		spaceBetween: 30,
	},
	1200: {
		slidesPerGroup: 5,
		slidesPerView: 5,
		spaceBetween: 30,
	},
};

export const Carousel = ({ items }) => {
	console.log(items);
	return (
		<>
			<Swiper
				slidesPerView={5}
				spaceBetween={40}
				centeredSlides={false}
				navigation={true}
				breakpoints={breakpoints}
				modules={[Navigation]}
				className={styles.swiper}
			>
				{items.map((item, index) => (
					<SwiperSlide key={index}>{item}</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
