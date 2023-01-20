export function translateMovieType(type) {
	switch (type) {
		case 'movie':
			return { naz: 'фільми', rod: 'фільмів' };
		case 'tv':
			return { naz: 'серіали', rod: 'серіалів' };
		default:
			return { naz: 'фільми', rod: 'фільмів' };
	}
}
