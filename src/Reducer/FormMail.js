import * as actionType from "../Constant/ActionType";
import { dataTableConfig } from "../Config";

const initState = {
    editData: null,
    listPaging: {
        data: [],
        total: 0,
        sco: {
              sortColumn: "code",
              sortOrder: "asc",
              limit: dataTableConfig.page_size,
              page: 1
		}
    }
};

const reducer = (state = initState, action) => {
    const { data } = action;
    const { listPaging } = state;
    const { sco } = listPaging;

    switch (action.type) {
        case actionType.FETCH_FORM_MAIL_SUCCESS:
            return {
                ...state,
                listPaging: {
                    ...state.listPaging,
                    total: data.total,
                    data: data.data
                }
            };
            case actionType.FETCH_FORM_MAIL_EDIT_SUCCESS:
                return {
                    ...state,
                    editData: data
                };
            case actionType.UPDATE_FORM_MAIL_PAGING:
                return {
                    ...state,
                    listPaging: {
                        ...listPaging,
                        sco: {
                            ...sco,
                            sortColumn: data.sortColumn ?? sco.sortColumn,
                            sortOrder: data.sortOrder ?? sco.sortOrder,
                            limit: data.limit ?? sco.limit,
                            page: data.page ?? sco.page
                        }
                    }
                };
            case actionType.RESET:
                return {
                    ...initState,
                    listPaging: {
                        ...initState.listPaging,
                        sco
                    }
                };
        default:
            return state;
    }
};

export default reducer;
