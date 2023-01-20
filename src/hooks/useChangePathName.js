import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useChangePathName = (func) => {
	const { pathname } = useLocation();

	useEffect(() => {
		func();
	}, [pathname]);
};
