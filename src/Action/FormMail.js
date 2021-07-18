import * as actionType from "../Constant/ActionType";

export const fetchFormMail = () => ({
  type: actionType.FETCH_FORM_MAIL,
});

export const fetchFormMailSuccess = data => ({
  type: actionType.FETCH_FORM_MAIL_SUCCESS,
	data
});

export const fetchFormMailEdit = data => ({
	type: actionType.FETCH_FORM_MAIL_EDIT,
	data
});

export const fetchFormMailEditSuccess = data => ({
	type: actionType.FETCH_FORM_MAIL_EDIT_SUCCESS,
	data
});

export const updateFormMailPagingSco = data => ({
	type: actionType.UPDATE_FORM_MAIL_PAGING,
	data
});

export const deleteFormMail = data => ({
	type: actionType.DELETE_FORM_MAIL,
	data
});

export const saveFormMail = data => ({
	type: actionType.SAVE_FORM_MAIL,
	data
});
