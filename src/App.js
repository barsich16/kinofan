import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { FilmPage } from './pages/FilmPage';
import { SearchPage } from './pages/SearchPage';
import { Cartoons } from './components/Filters/Cartoons/Cartoons';
import { Films } from './components/Filters/Films/Films';
import { Series } from './components/Filters/Series/Series';
import { ExchangerPage } from './pages/ExchangerPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='/films' element={<Films />} />
				<Route path='/cartoons' element={<Cartoons />} />
				{/*<Route path='/cartoons' element={<UniversalComp type={3} />} />*/}
				<Route path='/series' element={<Series />} />
				<Route
					path='/favourites'
					element={<SearchPage type={'favourites'} />}
				/>
				<Route path='/movie/:id' element={<FilmPage type='movie' />} />
				<Route path='/tv/:id' element={<FilmPage type='tv' />} />
				<Route path='/exchanger' element={<ExchangerPage />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
