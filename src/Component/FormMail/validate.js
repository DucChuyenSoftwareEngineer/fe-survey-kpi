export const validate = values => {
	const error = {};
	let { formName, title, content } = values;

	if (formName) {
		formName = formName.trim();
	}
	if (title) {
		title = title.trim();
	}
    if (content) {
		content = content.trim();
	}
	if (!formName) {
		error.formName = "Vui lòng nhập Tên biểu mẫu";
	}

	if (!title) {
		error.title = "Vui lòng nhập Tiêu đề biểu mẫu";
	}
    if (!content) {
		error.content = "Vui lòng nhập Nội dung gửi thư";
	}

	return error;
}
