import * as actionTypes from '../actions/actionTypes';

export default function lessonReducer(state = {
    loading: true,
    lessonDetailData: '',
    error: false,
    selectedLesson: null
}, action) {
    switch (action.type) {
        case actionTypes.SAVE_SELECTED_LESSON:
            return { ...state, selectedLesson: action.payload };

        case actionTypes.GET_LESSON_DETAIL_PENDING:
            return { ...state, loading: true, error: false }

        case actionTypes.GET_LESSON_DETAIL_ERROR:
            return { ...state, loading: false, error: action.error }

        case actionTypes.GET_LESSON_DETAIL_SUCCESS:
            return { ...state, loading: false, lessonDetailData: action.payload }

        default:
            return state;
    }
}