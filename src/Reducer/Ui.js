import * as actionType from "../Constant/ActionType";

const initState = {
    blocking: false,
    runningRequest: 0
};

const reducer = (state = initState, action) => {
    let { runningRequest } = state;

    switch (action.type) {
        case actionType.SHOW_LOADING:
            runningRequest += 1;
            return {
                ...state,
                runningRequest,
                blocking: runningRequest > 0
            };
        case actionType.HIDE_LOADING:
            runningRequest -= 1;
            return {
                ...state,
                runningRequest,
                blocking: runningRequest > 0
            };
        default:
            return state;
    }
};

export default reducer;
