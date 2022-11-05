import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { FilmPage } from './pages/FilmPage';
import { SearchPage } from './pages/SearchPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='/films' element={<SearchPage type={'films'} />} />
				<Route path='/cartoons' element={<SearchPage type={'cartoons'} />} />
				<Route path='/series' element={<SearchPage type={'series'} />} />
				<Route
					path='/favourites'
					element={<SearchPage type={'favourites'} />}
				/>
				<Route path='/film/:id' element={<FilmPage />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
