import * as actionTypes from './globalActionTypes'
function globalReducer(state = {
    showConfirmModal: false,
    ConfirmModalContent: null,
    ConfirmModalTitle: null,
    ConfirmModalConfirmFunc: null,
    accessToken: '',
    refreshToken: '',
    fbToken: '',
    currentRouteName: '',
    showStartSlider: true
}, action) {
    switch (action.type) {
        case actionTypes.SHOW_CONFIRM_MODAL:
            return {
              ...state,
              showConfirmModal: action.visible,
              ConfirmModalContent: action.contentModal,
              ConfirmModalTitle: action.title,
              ConfirmModalConfirmFunc: action.func,
              noButtonAction: action.noButtonAction,
              singleBtnTitle: action.singleBtnTitle
            };
        case actionTypes.SET_ACCESS_TOKEN:
            return { ...state, accessToken: action.payload }

        case actionTypes.SET_REFRESH_TOKEN:
            return { ...state, refreshToken: action.payload }

        case actionTypes.SET_FIREBASE_TOKEN:
            return { ...state, fbToken: action.payload }

        case actionTypes.SET_CURRENT_ROUTE:
            return { ...state, currentRouteName: action.payload }

        case actionTypes.SHOW_START_SLIDER:
            return { ...state, showStartSlider: action.payload }

        default:
            return state;
    }
}

export default globalReducer