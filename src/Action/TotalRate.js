import * as actionType from "../Constant/ActionType";

export const fetchListTotalRate = () => ({
  type: actionType.FETCH_LIST_TOTAL_RATE,
});

export const fetchListTotalRateSuccess = data => ({
  data,
  type: actionType.FETCH_LIST_TOTAL_RATE_SUCCESS,
});

export const updateTotalRatePagingSco = data => ({
  data,
  type: actionType.UPDATE_TOTAL_RATE_PAGING_SCO,
});

export const updateTotalRateSearchSco = data => ({
  data,
  type: actionType.UPDATE_TOTAL_RATE_SEARCH_SCO,
});