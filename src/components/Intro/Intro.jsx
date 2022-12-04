import styles from './Intro.module.scss';
import bg from '../../assets/img/bg1.jpg';
import { ReactComponent as Arrow } from '../../assets/img/arrow-right.svg';
import { Link } from 'react-router-dom';

export const Intro = () => {
	return (
		<div style={{ background: `center 20% / cover no-repeat url(${bg})` }}>
			<div className={`wrapper ${styles.inner}`}>
				<h1>Торte: Любов та грім</h1>
				<p>
					Джейн Фостер бере на себе обов'язки Бога-громовержця і стає власницею
					молоту Мйольнера
				</p>
				<Link to='/film/2' className='button'>
					<span>Детальніше</span> <Arrow className={styles.arrow} width={16} />
				</Link>
			</div>
		</div>
	);
};
