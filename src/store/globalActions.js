import * as actionTypes from './globalActionTypes';

export const showModalConfirm = (visibleModal, titleModal, contentModal, funcModal, singleBtnTitle,noButtonAction) => ({
    type: actionTypes.SHOW_CONFIRM_MODAL,
    visible: visibleModal,
    title: titleModal,
    func: funcModal,
    contentModal: contentModal,
    singleBtnTitle: singleBtnTitle,
    noButtonAction: noButtonAction,
});

export const setAccessToken = (accessToken) => ({
    type: actionTypes.SET_ACCESS_TOKEN,
    payload: accessToken
})

export const setRefreshToken = (refreshToken) => ({
    type: actionTypes.SET_REFRESH_TOKEN,
    payload: refreshToken
})

export const setFirebaseToken = (fbToken) => ({
    type: actionTypes.SET_FIREBASE_TOKEN,
    payload: fbToken
})

export const setCurrentRouteName = (routeName) => ({
    type: actionTypes.SET_CURRENT_ROUTE,
    payload: routeName
})

export const showStartSlider = (value) => ({
    type: actionTypes.SHOW_START_SLIDER,
    payload: value
})