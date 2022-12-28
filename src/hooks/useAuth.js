import { useSelector } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { useActions } from './useActions';

export const useAuth = () => {
	const { email, token, id } = useSelector((state) => state.user);

	const { removeUser } = useActions();

	const logout = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				removeUser();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return {
		isAuth: !!email,
		email,
		token,
		id,
		logout,
	};
};
