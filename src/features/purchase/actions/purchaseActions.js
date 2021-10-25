import { store } from '../../../store/store';
import CToast from '../../../utils/components/CToast';
import { discountCodeApi, purchaseCodeApi } from '../../../utils/constants/apiUrl';
import navigationService from '../../../utils/services/navigation/navigationService';
import { apiRequest } from '../../../utils/services/network/apiService';
import * as actionTypes from './actionTypes';


// ---------------- purchase (activation) code actions --------------------- 

export const checkPurchaseCodePending = () => ({
    type: actionTypes.CHECK_PURCHASE_CODE_PENDING
})

export const checkPurchaseCodeError = (error) => ({
    type: actionTypes.CHECK_PURCHASE_CODE_ERROR,
    error: error
})

export const checkPurchaseCodeSuccess = (value) => ({
    type: actionTypes.CHECK_PURCHASE_CODE_SUCCESS,
    payload: value
})

const checkPurhaseCodeOnSuccess = (response) => {
    store.dispatch(checkPurchaseCodeSuccess(''))
    if (response.data.isCostumer == true) {
        navigationService.resetFirst('Home')
    } else {
        CToast('کد وارد شده معتبر نیست', 'danger')
    }
}

const checkPurhaseCodeOnFaild = (error) => {
    store.dispatch(checkPurchaseCodeError(true))
}

export const checkPurchaseCode = (activationCode) => {
    store.dispatch(checkPurchaseCodePending())
    const formData = new FormData();
    formData.append('activation_code', activationCode)
    apiRequest({
        url: purchaseCodeApi,
        type: 'post',
        onSuccess: checkPurhaseCodeOnSuccess,
        onFailed: checkPurhaseCodeOnFaild,
        params: formData
    })
}


// ---------------- discount code actions --------------------- 

export const checkDiscountPending = () => ({
    type: actionTypes.CHECK_DISCOUNT_PENDING
})

export const checkDiscountError = (error) => ({
    type: actionTypes.CHECK_DISCOUNT_ERROR,
    error: error
})

export const checkDiscountSuccess = (value) => ({
    type: actionTypes.CHECK_DISCOUNT_SUCCESS,
    payload: value
})

const checDiscountOnSuccess = (response) => {
    store.dispatch(checkDiscountSuccess(response.data.data.discount))
}

const checDiscountOnFaild = (error) => {
    store.dispatch(checkDiscountError(true))
}

export const checkDiscountAction = (code) => {
    store.dispatch(checkDiscountPending())
    const formData = new FormData();
    formData.append('code', code)
    apiRequest({
        url: discountCodeApi,
        type: 'post',
        onSuccess: checDiscountOnSuccess,
        onFailed: checDiscountOnFaild,
        params: formData
    })
}
