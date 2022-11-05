import { useLocation } from 'react-router-dom';
import { Search } from '../components/Search/Search';

export const SearchPage = () => {
	const { pathname } = useLocation();
	const type = pathname.slice(1);

	return <Search type={type} />;
};
