export const validate = values => {
	const error = {};
	let { formName, period, formMail } = values;

	if (formName) {
		formName = formName.trim();
	}
	if (period) {
		period = period.trim();
	}
    if (formMail) {
		formMail = formMail.trim();
	}
	if (!formName) {
		error.formName = "Vui lòng nhập Tên biểu mẫu";
	}

	if (!period) {
		error.period = "Vui lòng chọn định kỳ";
	}
    if (!formMail) {
		error.formMail = "Vui lòng chọn mẫu gửi thư";
	}

	return error;
}
