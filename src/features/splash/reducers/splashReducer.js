import * as ActionTypes from '../actions/actionTypes'

function splashReducer(state = {
    error: false,
    loading: false
}, action) {
    switch (action.type) {
        case ActionTypes.SPLASH_PENDING:
            return { ...state, loading: true, error: false }

        case ActionTypes.SPLASH_SUCCESS:
            return { ...state, loading: false, error: false }

        case ActionTypes.SPLASH_ERROR:
            return { ...state, loading: false, error: action.error }

        default:
            return state;
    }
}

export default splashReducer