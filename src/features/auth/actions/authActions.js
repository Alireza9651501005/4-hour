import * as ActionTypes from './actionTypes';
import { store } from '../../../store/store';
import { apiRequest } from '../../../utils/services/network/apiService';
import { checkUserAccount } from '../../../utils/constants/apiUrl';
import navigationService from '../../../utils/services/navigation/navigationService';

export const setPhoneNumber = (value) => ({
    type: ActionTypes.SET_PHONE_NUMBER,
    payload: value
})

export const setAuthMode = (value) => ({
    type: ActionTypes.SET_AUTH_MODE,
    payload: value
})

//----------------------- login actions --------------------------

export const checkUserPending = () => ({
    type: ActionTypes.CHECK_USER_PENDING
})

export const checkUserError = (error) => ({
    type: ActionTypes.CHECK_USER_ERROR,
    error: error
})

export const checkUserSuccess = (value) => ({
    type: ActionTypes.CHECK_USER_SUCCESS,
    payload: value
})


const checkUserOnSuccess = (response) => {
    navigationService.navigate('VerifyCodeScreen')
    store.dispatch(checkUserSuccess(response.data.data))
}

const checkUserOnError = (error) => {
    store.dispatch(checkUserError(true))
}

export const checkUserAuth = (phoneNumber, mode) => {
    console.log('start', phoneNumber)
    store.dispatch(checkUserPending())

    const formData = new FormData();
    formData.append('phone_email', phoneNumber);
    formData.append('from', mode === 'login' ? 1 : 2);


    apiRequest({
        type: 'post',
        url: checkUserAccount,
        onSuccess: checkUserOnSuccess,
        onFailed: checkUserOnError,
        params: formData
    })
}