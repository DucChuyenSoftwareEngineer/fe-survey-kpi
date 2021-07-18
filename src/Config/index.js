export const dataTableConfig = {
	page_size: 10,
	length_menu: [10, 20, 50],
	show_filter: false,
	show_pagination: true,
	pagination: "advance",
	language: {
		processing:		"Đang xử lý...",
		length_menu:	"Xem _MENU_ mục",
		no_data_text: 	"Không tìm thấy dòng nào phù hợp",
		info:			"Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
		infoEmpty:		"Đang xem 0 đến 0 trong tổng số 0 mục",
		infoFiltered:	"(được lọc từ _MAX_ mục)",
		infoPostFix:	"",
		filter:			"Tìm:",
		url:			"",
		pagination: {
			first:		"Đầu",
			previous:	"Trước",
			next:		"Tiếp",
			last:		"Cuối"
		}
	}
};

export const dataTableConfigClient = {
	...dataTableConfig,
	show_filter: false,
	show_pagination: false,
	show_length_menu: false,
	show_info: false
};

export const LOADING_DELAY_TIME = 10;
export const TAKE_LATEST_DELAY_TIME = 1000;
