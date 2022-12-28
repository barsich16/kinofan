import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { FilmPage } from './pages/FilmPage';
import { Films } from './components/Filters/Films/Films';
import { Series } from './components/Filters/Series/Series';
import { ExchangerPage } from './pages/ExchangerPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/movie' element={<Films />} />
				<Route path='/movie/:id' element={<FilmPage type='movie' />} />
				<Route path='/tv' element={<Series />} />
				<Route path='/tv/:id' element={<FilmPage type='tv' />} />
				<Route path='/exchanger' element={<ExchangerPage />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
