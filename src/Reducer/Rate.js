import * as actionType from "../Constant/ActionType";

const initState = {
    rateData: null
};

const reducer = (state = initState, action) => {
    const { data } = action;
    switch (action.type) {
        case actionType.FETCH_HANDLE_RATE_SUCCESS:
            return {
                ...state,
                rateData: data,
            };

        default:
            return state;
    }
};

export default reducer;
