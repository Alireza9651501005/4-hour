import * as actionTypes from '../actions/actionTypes';

export default function purchaseReducer(
    state = {
        codeLoading: false,
        discountLoading:false,
        error:false,
        purchaseCodeData:null,
        discountData:false
    }, action) {
    switch (action.type) {
        case actionTypes.CHECK_PURCHASE_CODE_PENDING:
            return { ...state, codeLoading: true, error: false };

        case actionTypes.CHECK_PURCHASE_CODE_ERROR:
            return { ...state, codeLoading: false, error: action.error };

        case actionTypes.CHECK_PURCHASE_CODE_SUCCESS:
            return { ...state, codeLoading: false, purchaseCodeData: action.payload };

        case actionTypes.CHECK_DISCOUNT_PENDING:
            return { ...state, discountLoading: true, error: false };

        case actionTypes.CHECK_DISCOUNT_ERROR:
            return { ...state, discountLoading: false, error: action.error };

        case actionTypes.CHECK_DISCOUNT_SUCCESS:
            return { ...state, discountLoading: false, discountData: action.payload };

        default:
            return state;
    }
}