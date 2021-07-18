import * as actionType from "../Constant/ActionType";

export const fetchFormRate = () => ({
  type: actionType.FETCH_FORM_RATE,
});

export const fetchFormRateSuccess = data => ({
  data,
  type: actionType.FETCH_FORM_RATE_SUCCESS,
});

export const fetchFormRateEdit = data => ({
	type: actionType.FETCH_FORM_RATE_EDIT,
	data
});

export const fetchFormRateEditSuccess = data => ({
	type: actionType.FETCH_FORM_RATE_EDIT_SUCCESS,
	data
});


export const updateFormRatePagingSco = data => ({
	type: actionType.UPDATE_FORM_RATE_PAGING,
	data
});

export const deleteFormRate = data => ({
	type: actionType.DELETE_FORM_RATE,
	data
});

export const saveFormRate = data => ({
	type: actionType.SAVE_FORM_RATE,
	data
});
