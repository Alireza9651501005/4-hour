import { store } from '../../../store/store';
import { homeDataApi } from '../../../utils/constants/apiUrl';
import { apiRequest } from '../../../utils/services/network/apiService';
import * as actionTypes from './ActionTypes';

export const homeDataPending = () => ({
    type: actionTypes.HOME_DATA_PENDING
})

export const homeDataError = (error) => ({
    type: actionTypes.HOME_DATA_ERROR,
    error: error
})

export const homeDataSuccess = (data) => ({
    type: actionTypes.HOME_DATA_SUCCESS,
    payload: data
})

const homeDataOnSuccess = (response) => {
    store.dispatch(homeDataSuccess(response.data.data))
}

const homeDataOnError = (error) => {
    store.dispatch(homeDataError(true))
}

export const getHomeData = () => {
    store.dispatch(homeDataPending())
    apiRequest({
        type: 'get',
        url: homeDataApi,
        onSuccess: homeDataOnSuccess,
        onFailed: homeDataOnError,
        // myFunc: getHomeData()
    })

}
