import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { BurgerMenu } from '../UI/BurgerMenu/BurgerMenu';
import { Searchbar } from '../UI/Searchbar/Searchbar';
import styles from './Header.module.scss';
import { FiLogIn, FiLogOut } from 'react-icons/fi';

export const Header = () => {
	const { isAuth, logout } = useAuth();

	return (
		<div className={styles.header}>
			<div className={`wrapper ${styles.inner}`}>
				<BurgerMenu />
				<Searchbar />
				{isAuth ? (
					<span className={styles.login} onClick={logout}>
						<span>Вийти</span>
						<FiLogOut />
					</span>
				) : (
					<Link to='/login' className={styles.login}>
						<span>Увійти</span>
						<FiLogIn />
					</Link>
				)}
			</div>
		</div>
	);
};
