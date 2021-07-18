import axiosService from "./AxiosService";

const endpoint = "surveyMail";

export const fetchFormMail = data => {
	return axiosService.get(`/${endpoint}/${data}`);
};

export const registerFormMail = data => {
	return axiosService.post(`/${endpoint}`, data);
};

export const updateFormMail = data => {
	return axiosService.put(`/${endpoint}/${data.id}`, data);
};

export const deleteFormMail = data => {
	return axiosService.delete(`/${endpoint}/${data}`);
};