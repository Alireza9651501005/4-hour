import * as actionTypes from '../actions/ActionTypes';

function homeReducer(state = {
  homeData: {profile:{levels:[]},courses:[]},
  loading: true,
  error: false
}, action) {
  switch (action.type) {

    case actionTypes.HOME_DATA_PENDING:
      return { ...state, loading: true, error: false }

    case actionTypes.HOME_DATA_ERROR:
      return { ...state, loading: false, error: action.error }

    case actionTypes.HOME_DATA_SUCCESS:
      return { ...state, loading: false, homeData: action.payload }

    default:
      return state;
  }
}

export default homeReducer;
