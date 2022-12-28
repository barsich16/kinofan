import { useEffect } from 'react';

export const Player = ({ id }) => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = '/player.js';
		document.body.appendChild(script);

		return () => {
			script.remove();
		};
	}, []);
	return (
		<div id='kinobd' data-resize='1' data-bg='#000' data-kinopoisk={123328} />
	);
};
