import * as actionTypes from './actionTypes';
import { store } from '../../../store/store';
import { apiRequest } from '../../../utils/services/network/apiService';
import { lessonDetailApi, likeLessonApi } from '../../../utils/constants/apiUrl';

export const saveSelectedLesson = (value) => ({
    type: actionTypes.SAVE_SELECTED_LESSON,
    payload: value
})


export const getLessonDetailPending = () => ({
    type: actionTypes.GET_LESSON_DETAIL_PENDING
})

export const getLessonDetailError = (error) => ({
    type: actionTypes.GET_LESSON_DETAIL_ERROR,
    error: error
})

export const getLessonDetailSuccess = (data) => ({
    type: actionTypes.GET_LESSON_DETAIL_SUCCESS,
    payload: data
})

const getLessonDetailOnSuccess = (response) => {
    store.dispatch(getLessonDetailSuccess(response.data.data))
}

const getLessonDetailOnFaild = (error) => {
    store.dispatch(getLessonDetailError(true))
}

export const getLessonDetailData = (id) => {
    store.dispatch(getLessonDetailPending())
    apiRequest({
        type: 'get',
        url: lessonDetailApi(id),
        onSuccess: getLessonDetailOnSuccess,
        onFailed: getLessonDetailOnFaild,
        // myFunc: getLessonDetailData(id)
    })

}


//like lesson

export const likeLessonPending = () => ({
    type: actionTypes.LIKE_LESSON_PENDING
})

export const likeLessonError = (error) => ({
    type: actionTypes.LIKE_LESSON_ERROR,
    error: error
})

export const likeLessonSuccess = (value) => ({
    type: actionTypes.LIKE_LESSON_SUCCESS,
    payload: value
})


const likeLessonOnSuccess = (response, exData) => {
    let data = response.data.data
    store.dispatch(likeLessonSuccess(data))
    
}
const likeLessonOnFailed = (error, exData) => {
    store.dispatch(likeLessonError(error))
    exData.callback()
}

export const likeLesson = (method, id, callback) => {
    store.dispatch(likeLessonPending())
    apiRequest({
        type: method,
        url: likeLessonApi(id),
        onSuccess: likeLessonOnSuccess,
        onFailed: likeLessonOnFailed,
        // myFunc: likeLesson(method, id, callback),
        extraData: { callback : callback }
    })
}