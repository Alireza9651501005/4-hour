import * as ActionTypes from '../actions/actionTypes';

function verifyCodeReducer(
    state = {
        error: false,
        loading: false,
        data: null
    }, action) {
    switch (action.type) {

        case ActionTypes.VERIFY_CODE_PENDING:
            return { ...state, loading: true, error: false };

        case ActionTypes.VERIFY_CODE_ERROR:
            return { ...state, loading: false, error: action.error };

        case ActionTypes.VERIFY_CODE_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload };

        default:
            return state;
    }
}

export default verifyCodeReducer;