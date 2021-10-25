import * as ActionTypes from '../actions/actionTypes';

export default function authReducer(state = {
    phoneNumber: '',
    error: false,
    loading: false,
    authMode: ''
}, action) {
    switch (action.type) {
        case ActionTypes.SET_PHONE_NUMBER:
            return { ...state, phoneNumber: action.payload };

        case ActionTypes.SET_AUTH_MODE:
            return { ...state, authMode: action.payload };

        case ActionTypes.CHECK_USER_PENDING:
            return { ...state, loading: true, error: false };

        case ActionTypes.CHECK_USER_ERROR:
            return { ...state, loading: false, error: action.error };

        case ActionTypes.CHECK_USER_SUCCESS:
            return { ...state, loading: false, error: false };

        default:
            return state;
    }
}