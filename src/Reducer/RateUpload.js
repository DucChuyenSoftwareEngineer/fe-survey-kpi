import * as actionType from "../Constant/ActionType";
import { dataTableConfig } from "../Config";

const initState = {
    listPaging: {
        data: [],
        total: 0,
        sco: {
			sortColumn: "code",
			sortOrder: "asc",
			limit: dataTableConfig.page_size,
			page: 1
		}
    },
};

const reducer = (state = initState, action) => {
    const { data } = action;
    const { listPaging } = state;
    const { sco } = listPaging;

    switch (action.type) {
        case actionType.FETCH_LIST_RATE_UPLOAD_SUCCESS:
            return {
                ...state,
                listPaging: {
                    ...state.listPagingNew,
                    total: data.total,
                    data: data.data
                }
            }
        case actionType.UPDATE_LIST_RATE_UPLOAD_PAGING:
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
        default:
            return state;
    }
};

export default reducer;
