export function convertMovieType(type) {
	switch (type) {
		case 'film':
			return 'фільм';
		case 'tv-series':
		case 'animated-series':
		case 'anime':
			return 'серіал';
		case 'carton':
			return 'мультфільм';
		default:
			return 'фільм';
	}
}
