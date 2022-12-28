// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Swiper.module.scss';

// import required modules

import { Navigation } from 'swiper';

export const Carousel = () => {
	return (
		<>
			<Swiper
				slidesPerView={5}
				spaceBetween={30}
				centeredSlides={false}
				navigation={true}
				// pagination={{
				// 	clickable: true,
				// }}
				modules={[Navigation]}
				className={styles.swiper}
			>
				<SwiperSlide>
					<div className={styles.slide}>
						<a href='#' className={styles.image_block}>
							<div className={styles.image_wrapper}>
								<img src={'https://place-hold.it/64x96'} alt='Image' />
							</div>
						</a>
						<a>Бетмен</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.image_block}>
						<img src={'https://place-hold.it/64x96'} alt='Image' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.image_block}>s</div>
				</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide>
			</Swiper>
		</>
	);
};
