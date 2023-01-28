import styles from './Authorisation.module.scss';
import { useFormik } from 'formik';
import { Button } from '../common/Button/Button';
import { SearchInput } from '../UI/SearchInput/SearchInput';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';

export const Register = () => {
	const { isAuth, register, validateEmail, validatePassword } = useAuth();
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
		onSubmit: (loginValues) => {
			register(loginValues);
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
					<h1>Реєстрація</h1>
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
							<span>Зареєструватися</span>
						</Button>
						<p>
							Вже є аккаунт? <Link to='/login'>Увійти</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};
