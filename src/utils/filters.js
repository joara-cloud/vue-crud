export function formatDate(value) {
	const date = new Date(value);
	const year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let hours = date.getHours();
	const minutes = date.getMinutes();
	month = month > 9 ? month : `0${month}`;
	day = day > 9 ? day : `0${day}`;
	hours = hours > 9 ? hours : `0${hours}`;

	return `${year}-${month}-${day} ${hours}:${minutes}`;
}