import * as actionType from "../Constant/ActionType";

const initState = {
    userInfo: {
        fullName: null,
        email: null,
        phone: null,
        title: null,
        branchName: null
    },
    avatar: null
};

const reducer = (state = initState, action) => {
    const { data } = action;

    switch (action.type) {
        case actionType.FETCH_USER_SUCCESS:
            return {
                ...state,
                userInfo: {
                    fullName: data.fullName,
                    email: data.email,
                    phone: data.phone,
                    title: data.title,
                    branchName: data.branchName
                }
            };
        case actionType.FETCH_AVATAR_SUCCESS:
            return {
                ...state,
                avatar: data
            };
        default:
            return state;
    }
};

export default reducer;
