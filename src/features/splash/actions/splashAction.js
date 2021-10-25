import { store } from '../../../store/store';
import { startup } from '../../../utils/constants/apiUrl';
import navigationService from '../../../utils/services/navigation/navigationService';
import { apiRequest } from '../../../utils/services/network/apiService';
import * as ActionTypes from './actionTypes';


export const getSplashSuccess = (data) => ({
    type: ActionTypes.SPLASH_SUCCESS,
    payload: data
});

export const getSplashError = (error) => ({
    type: ActionTypes.SPLASH_ERROR,
    error: error
});

export const getSplashPending = () => ({
    type: ActionTypes.SPLASH_PENDING
});

const getSplashOnSuccess = (response) => {
    let state = store.getState()
    let showStartSlider = state.globalReducer.showStartSlider
    let accessToken = state.globalReducer.accessToken

    store.dispatch(getSplashSuccess(response.data.data))
    if(accessToken.length>2){
        navigationService.resetFirst('Home')
    }
    else if (showStartSlider) {
        navigationService.resetFirst('StartUpSlider')
    }
    // else if(accessToken.length>2){
    //     navigationService.resetFirst('Home')
    // }
    else {
        navigationService.resetFirst('TargetScreen')
    }
}

const getSplashOnFaild = (error) => {
    store.dispatch(getSplashError(true))
}

export const getSplashApi = () => {
    const formData = new FormData();
    // formData.append('access_token', '');
    // formData.append('firebase_token', '');
    formData.append('app_version', 1);
    store.dispatch(getSplashPending())
    apiRequest({
        type: 'post',
        url: startup,
        onSuccess: getSplashOnSuccess,
        onFailed: getSplashOnFaild,
        params: formData
    })
}