import * as ActionTypes from './actionTypes';
import { store } from '../../../store/store';
import { apiRequest } from '../../../utils/services/network/apiService';
import { loginByCodeApi, registerByCodeApi } from '../../../utils/constants/apiUrl';
import navigationService from '../../../utils/services/navigation/navigationService';
import { setAccessToken, setRefreshToken } from '../../../store/globalActions';


export const verifyCodePending = () => ({
    type: ActionTypes.VERIFY_CODE_PENDING
})

export const verifyCodeError = (error) => ({
    type: ActionTypes.VERIFY_CODE_ERROR,
    error: error
})

export const verifyCodeSuccess = (value) => ({
    type: ActionTypes.VERIFY_CODE_SUCCESS,
    payload: value
})


const verifyCodeOnSuccess = (response,extraData) => {
    navigationService.resetFirst('StartLearning')
    let data = response.data.data;
    store.dispatch(verifyCodeSuccess(data))
    store.dispatch(setAccessToken(data.access_token))
    store.dispatch(setRefreshToken(data.refresh_token))
    extraData.clearCodeInput.clear()

}

const verifyCodeOnError = (error, extraData) => {
    store.dispatch(verifyCodeError(true))
    extraData.clearCodeInput.clear()
}

export const verifyCodeAction = (verifyCode, phoneNumber, clearCodeInput) => {
    store.dispatch(verifyCodePending())
    let state = store.getState()
    const authMode = state.authReducer.authMode
    const formData = new FormData();
    formData.append("code", verifyCode);
    formData.append("phone_email", phoneNumber);

    apiRequest({
        type: 'post',
        url: authMode === 'login' ? loginByCodeApi : registerByCodeApi,
        onSuccess: verifyCodeOnSuccess,
        onFailed: verifyCodeOnError,
        params: formData,
        clientSec: true,
        extraData: { clearCodeInput }
    })
}