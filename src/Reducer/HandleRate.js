import * as actionType from "../Constant/ActionType";
import { dataTableConfig } from "../Config";

const initState = {
  listPaging: {
    data: [],
    total: 0,
    limit: dataTableConfig.page_size,
  },
  listPagingNew: {
    data: [],
    total: 0,
    limit: dataTableConfig.page_size,
  },

  listPagingSave: {
    data: [],
    total: 0,
    limit: dataTableConfig.page_size,
  },

  listPagingComplete: {
    data: [],
    total: 0,
    limit: dataTableConfig.page_size,
  },
};

const reducer = (state = initState, action) => {
  const { data } = action;

  switch (action.type) {
    case actionType.FETCH_FORM_HANDLE_RATE_SUCCESS:
      return {
        ...state,
        listPaging: {
          ...state.listPaging,
          total: data.total,
          data: data.data,
        },
      };
    case actionType.FETCH_LIST_HANDLE_RATE_SUCCESS:
      return {
        ...state,
        listPagingNew: {
          ...state.listPagingNew,
          total: data.total,
          data: data.data,
        },
      };
    case actionType.FETCH_LIST_HANDLE_RATE_SAVE_SUCCESS:
      return {
        ...state,
        listPagingSave: {
          ...state.listPagingSave,
          total: data.total,
          data: data.data,
        },
      };
    case actionType.FETCH_LIST_HANDLE_RATE_COMPLETE_SUCCESS:
      return {
        ...state,
        listPagingComplete: {
          ...state.listPagingComplete,
          total: data.total,
          data: data.data,
        },
      };

    default:
      return state;
  }
};

export default reducer;
