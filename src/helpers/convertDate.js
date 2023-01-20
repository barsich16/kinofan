export const convertDate = (inputDate) => {
	const months = [
		'cічня',
		'лютого',
		'березня',
		'квітня',
		'травня',
		'червня',
		'липня',
		'серпня',
		'вересня',
		'жовтня',
		'листопада',
		'жовтня',
		'листопада',
		'грудня',
	];

	const date = new Date(inputDate);

	console.log(date.getMonth());

	return (
		date.getDate() +
		' ' +
		months[date.getMonth() + 2] +
		' ' +
		date.getFullYear()
	);
};
