import * as actionType from "../Constant/ActionType";

export const fetchListRateUpload = () => ({
  type: actionType.FETCH_LIST_RATE_UPLOAD,
});

export const fetchListRateUploadSuccess = data => ({
  data,
  type: actionType.FETCH_LIST_RATE_UPLOAD_SUCCESS,
});

export const deleteRateUpload = data => ({
	type: actionType.DELETE_RATE_UPLOAD,
	data
});

export const saveRateUpload = data => ({
	type: actionType.SAVE_RATE_UPLOAD,
	data
});

export const updateListRateUploadPagingSco = data => ({
	type: actionType.UPDATE_LIST_RATE_UPLOAD_PAGING,
	data
});