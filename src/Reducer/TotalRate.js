import * as actionType from "../Constant/ActionType";
import { dataTableConfig } from "../Config";

const initState = {
    listPaging: {
        data: [],
        total: 0,
        sco: {
			period: null,
			quarter: null,
			year: null,
            formRate: null,
            status: null,
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
        case actionType.FETCH_LIST_TOTAL_RATE_SUCCESS:
            return {
                ...state,
                listPaging: {
                    ...state.listPaging,
                    total: data.total,
                    data: data.data
                }
            }
        case actionType.UPDATE_TOTAL_RATE_PAGING_SCO:
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
        case actionType.UPDATE_TOTAL_RATE_SEARCH_SCO:
            return {
                ...state,
                listPaging: {
                    ...listPaging,
                    sco: {
                        ...sco,
                        ...data
                    }
                }
            };
        default:
            return state;
    }
};

export default reducer;
