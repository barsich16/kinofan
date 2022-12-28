import styles from './Authorisation.module.scss';
import { useActions } from '../../hooks/useActions';
import { Formik, useFormik } from 'formik';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from '../common/Button/Button';
import { SearchInput } from '../UI/SearchInput/SearchInput';
import { Link, redirect, useNavigate } from 'react-router-dom';

export const Login = () => {
	const { setUser } = useActions();
	const navigate = useNavigate();
	const handleLogin = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				// Signed in
				// const user = userCredential.user;
				// console.log(userCredential);
				setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken,
				});
				console.log(user);
				navigate('/');

				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(error);
			});
	};

	const {
		setSort,
		// setSortByRelease,
	} = useActions();
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: ({ email, password }) => {
			console.log(password);
			handleLogin(email, password);
		},
	});

	// useEffect(() => {
	// 	resetFilters();
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	return (
		<div className={`wrapper ${styles.main}`}>
			<div className={styles.inner}>
				<h1>Вхід</h1>
				{/*<Formik*/}
				{/*	initialValues={{*/}
				{/*		email: '',*/}
				{/*		password: '',*/}
				{/*	}}*/}
				{/*	// validate={(values) => {*/}
				{/*	// 	const errors = {};*/}
				{/*	// 	if (!values.email) {*/}
				{/*	// 		errors.email = 'Required';*/}
				{/*	// 	} else if (*/}
				{/*	// 		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)*/}
				{/*	// 	) {*/}
				{/*	// 		errors.email = 'Invalid email address';*/}
				{/*	// 	}*/}
				{/*	// 	return errors;*/}
				{/*	// }}*/}

				{/*	onSubmit={(values) => {*/}
				{/*		console.log(values);*/}
				{/*		// const { sortBy, rating, year, genres = [], length } = values;*/}
				{/*	}}*/}
				{/*>*/}
				{/*{({*/}
				{/*	values,*/}
				{/*	// errors,*/}
				{/*	// touched,*/}
				{/*	// handleChange,*/}
				{/*	// handleBlur,*/}
				{/*	handleSubmit,*/}
				{/*	handleReset,*/}
				{/*	isSubmitting,*/}
				{/*}) => (*/}
				<form onSubmit={formik.handleSubmit}>
					<SearchInput
						label='Email'
						placeholder='Введіть email'
						name='email'
						onChange={formik.handleChange}
						value={formik.values.email}
						wrapperClassName={styles.input}
					/>
					<SearchInput
						label='Пароль'
						placeholder='Введіть пароль'
						name='password'
						onChange={formik.handleChange}
						value={formik.values.password}
						wrapperClassName={styles.input}
					/>
					<Button
						type='submit'
						className={styles.btn}
						// disabled={isFetching}
					>
						<span>Увійти</span>
					</Button>
					<p>
						Немає аккаунту? <Link to='/register'>Зареєструватися</Link>
					</p>
				</form>
				{/*// 	)}*/}
				{/*// </Formik>*/}
			</div>
		</div>
	);
};
