import * as actionTypes from './actionTypes';
import { store } from '../../../store/store';
import { apiRequest } from '../../../utils/services/network/apiService';
import { getLessonsApi } from '../../../utils/constants/apiUrl';
export const saveSelectedCourse = (value) => ({
    type: actionTypes.SAVE_SELECTED_COURSE,
    payload: value
})


export const getLessonsPending = () => ({
    type: actionTypes.GET_LESSONS_PENDING
})

export const getLessonsError = (error) => ({
    type: actionTypes.GET_LESSONS_ERROR,
    error: error
})

export const getLessonsSuccess = (data) => ({
    type: actionTypes.GET_LESSONS_SUCCESS,
    payload: data
})

const getLessonsOnSuccess = (response) => {
    store.dispatch(getLessonsSuccess(response.data.data))
}

const getLessonsOnFaild = (error) => {
    store.dispatch(getLessonsError(true))
}

export const getLessonsData = (id) => {
    store.dispatch(getLessonsPending())
    apiRequest({
        type: 'get',
        url: getLessonsApi+id,
        onSuccess: getLessonsOnSuccess,
        onFailed: getLessonsOnFaild,
        // myFunc: getHomeData()
    })

}