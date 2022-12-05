import { Exchanger } from '../components/Exchanger/Exchanger';
import styles from '../components/FilmDetails/FilmDetails.module.scss';

export const ExchangerPage = () => {
	return (
		<div style={{ backgroundColor: '#1f1f1f' }}>
			<div className={`wrapper`}>
				<Exchanger />
			</div>
		</div>
	);
};
