import * as actionTypes from '../actions/actionTypes';

export default function (state = {
    loading: true,
    lessonsData: '',
    error: false,

}, action) {
    switch (action.type) {
        case actionTypes.SAVE_SELECTED_COURSE:
            return { ...state, selectedCourse: action.payload };

        case actionTypes.GET_LESSONS_PENDING:
            return { ...state, loading: true, error: false }

        case actionTypes.GET_LESSONS_ERROR:
            return { ...state, loading: false, error: action.error }

        case actionTypes.GET_LESSONS_SUCCESS:
            return { ...state, loading: false, lessonsData: action.payload }

        default:
            return state;
    }
}