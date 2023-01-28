import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { FilmPage } from './pages/FilmPage';
import { Films } from './components/Filters/Films/Films';
import { Series } from './components/Filters/Series/Series';
import { Register } from './components/Authorisation/Register';
import { Login } from './components/Authorisation/Login';
import { useEffect } from 'react';
import { useActions } from './hooks/useActions';

function App() {
	const { setUser } = useActions();

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('userData'));
		if (userData && userData.token) {
			setUser(userData);
		}
	}, []);

	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/movie' element={<Films />} />
				<Route path='/movie/:id' element={<FilmPage type='movie' />} />
				<Route path='/tv' element={<Series />} />
				<Route path='/tv/:id' element={<FilmPage type='tv' />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
