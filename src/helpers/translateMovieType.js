export function translateMovieType(type) {
	switch (type) {
		case 'films':
			return { naz: 'фільми', rod: 'фільмів' };
		case 'cartoons':
			return { naz: 'мультфільми', rod: 'мультфільмів' };
		case 'series':
			return { naz: 'серіали', rod: 'серіалів' };
		default:
			return { naz: 'фільми', rod: 'фільмів' };
	}
}
