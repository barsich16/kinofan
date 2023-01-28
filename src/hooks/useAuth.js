import { useSelector } from 'react-redux';
import { useActions } from './useActions';

export const useAuth = () => {
	const { email, token, id } = useSelector((state) => state.user);
	const { loginThunk, registerThunk, logoutThunk } = useActions();

	const login = (loginValues) => {
		loginThunk(loginValues);
	};

	const register = (loginValues) => {
		registerThunk(loginValues);
	};

	const logout = () => {
		logoutThunk();
	};

	const validateEmail = (value) => {
		let error;
		if (!value) {
			error = "Обов'язкове поле";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = 'Некоректний email';
		}
		return error;
	};

	const validatePassword = (value) => {
		let error;
		if (!value) {
			error = "Обов'язкове поле";
		} else if (value.length < 6) {
			error = 'Пароль повинен містити хоча б 6 символів';
		} else if (!/^[^\s(),-]*$/i.test(value)) {
			error = 'Пароль не повинен містити пробілів та символів ( ) - ,';
		}
		return error;
	};

	return {
		isAuth: !!email,
		email,
		token,
		id,
		login,
		logout,
		register,
		validateEmail,
		validatePassword,
	};
};
