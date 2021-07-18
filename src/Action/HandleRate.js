import * as actionType from "../Constant/ActionType";

export const fetchFormHandleRate = () => ({
  type: actionType.FETCH_FORM_HANDLE_RATE,
});

export const fetchFormHandleRateSuccess = (data) => ({
  data,
  type: actionType.FETCH_FORM_HANDLE_RATE_SUCCESS,
});

export const fetchListCreateRate = () => ({
  type: actionType.FETCH_LIST_HANDLE_RATE,
});

export const fetchListCreateRateSuccess = (data) => ({
  data,
  type: actionType.FETCH_LIST_HANDLE_RATE_SUCCESS,
});

export const fetchListCreateRateSaveSuccess = (data) => ({
  data,
  type: actionType.FETCH_LIST_HANDLE_RATE_SAVE_SUCCESS,
});

export const fetchListCreateRateCompleteSuccess = (data) => ({
  data,
  type: actionType.FETCH_LIST_HANDLE_RATE_COMPLETE_SUCCESS,
});
