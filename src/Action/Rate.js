import * as actionType from "../Constant/ActionType";

export const fetchHandleRate = (data) => ({
    type: actionType.FETCH_HANDLE_RATE,
    data,
  });
  
  export const fetchHandleRateSuccess = (data) => ({
    type: actionType.FETCH_HANDLE_RATE_SUCCESS,
    data,
  });