import styles from './Authorisation.module.scss';
import { useFormik } from 'formik';
import { Button } from '../common/Button/Button';
import { SearchInput } from '../UI/SearchInput/SearchInput';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Login = () => {
	const { isAuth, login, validateEmail, validatePassword } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuth) {
			navigate('/');
		}
	}, [isAuth]);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			login(values);
		},
		validate: (values) => {
			let errors = {};
			const email = validateEmail(values.email);
			const password = validatePassword(values.password);
			if (email) errors.email = email;
			if (password) errors.password = password;

			return errors;
		},
	});

	const { handleChange, handleSubmit, values, errors, touched } = formik;

	return (
		<div className={styles.main}>
			<div className='wrapper'>
				<div className={styles.inner}>
					<h1>Вхід</h1>
					<form onSubmit={handleSubmit}>
						<SearchInput
							label='Email'
							placeholder='Введіть email'
							name='email'
							onChange={handleChange}
							value={values.email}
							wrapperClassName={styles.input}
							error={errors.email}
							touched={touched.email}
						/>
						<SearchInput
							label='Пароль'
							placeholder='Введіть пароль'
							name='password'
							onChange={handleChange}
							value={values.password}
							wrapperClassName={styles.input}
							error={errors.password}
							touched={touched.email}
							type='password'
						/>
						<Button type='submit' className={styles.btn}>
							<span>Увійти</span>
						</Button>
						<p>
							Немає аккаунту? <Link to='/register'>Зареєструватися</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};
