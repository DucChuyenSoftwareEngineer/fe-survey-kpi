export const updatePageTitle = title => {
    document.title = `KPI Survey System - ${title}`;
};

export const getServerError = ({ response: { status, data }, message }) => {
	const result = {};
	const validate = {};

	if (status === 400) {
		const { listMessage } = data;

		Object.keys(listMessage).forEach(key => {
			if (key) {
				validate[key] = listMessage[key];
			} else {
				result.message = listMessage[key];
			}
		});

		if (Object.keys(validate).length) {
			result.validate = validate;
		}
	} else {
		result.message = message;
	}

	return result;
};

export const convertFormatMMDDYYYY = date => {
    const [day, month, year] = date.split("/");

    return `${month}/${day}/${year}`;
};

export const parseDate = str => {
	let m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
	return (m) ? new Date(m[3], m[2]-1, m[1]) : null;
}

export const dayDifference = (date1, date2) => {
	const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
	let timeDiff = date2.getTime() - date1.getTime();
	let diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
	return diffDays;
}
