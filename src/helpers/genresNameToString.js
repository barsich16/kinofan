export const genresNameToString = (genres = []) => {
	const genresNames = genres.map((genre) => genre.label);
	return genresNames.length > 0 ? genresNames.join(', ') : 'Всі';
};
