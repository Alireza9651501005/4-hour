import * as ActionTypes from "../actions/ActionTypes";
const profileReducer = (
  state = {
    error: false,
    loading: true,
    profileData: { image: null },
    logOutLoading: false,
    shareAppLoading: false,
    getUserPublicProfileLoading: false,
    uploadProfileImageLoading: false,
    profileImage: null,
    changeUserNameLoading: false,
    userPublicProfileData: [],
    editUserProfileInfoLoading: false,
    logOutMode:false,
    modal: false,
    // ================================
    name: '',
    userName: '',
    certificate: '',
    field: '',
    city: '',
    country: '',
    gender: '',
    // =======================================
  },
  action
) => {
  switch (action.type) {
    // ================================================
    case ActionTypes.CHANGE_NAME:
      return {...state, name: action.payload}
    case ActionTypes.CHANGE_USER_NAME:
      return {...state, userName: action.payload}
    case ActionTypes.CHANGE_CERTIFICATE:
      return {...state, certificate: action.payload}
    case ActionTypes.CHANGE_FIELD:
      return {...state, field: action.payload}
    case ActionTypes.CHANGE_CITY:
      return {...state, city: action.payload}
    case ActionTypes.CHANGE_COUNTRY:
      return {...state, country: action.payload}
    case ActionTypes.CHANGE_GENDER:
      return {...state, gender: action.payload}
    // ================================================
    case ActionTypes.GET_PROFILE_PENDING:
      return { ...state, loading: true ,error:false };
    case ActionTypes.GET_PROFILE_ERROR:
      return { ...state, loading: false, lesson: action.payload ,error:true};
    case ActionTypes.GET_PROFILE_SUCCESS:
      return { ...state, loading: false, profileData: action.payload };

    case ActionTypes.LOG_OUT_PENDING:
      return { ...state, logOutLoading: true };
    case ActionTypes.LOG_OUT_ERROR:
      return { ...state, logOutLoading: false };
    case ActionTypes.LOG_OUT_SUCCESS:
      return { ...state, logOutLoading: false };

    case ActionTypes.SHARE_APP_PENDING:
      return { ...state, shareAppLoading: true };
    case ActionTypes.SHARE_APP_ERROR:
      return { ...state, shareAppLoading: false };
    case ActionTypes.SHARE_APP_SUCCESS:
      return { ...state, shareAppLoading: false };

    case ActionTypes.UPLOAD_PROFILE_IMAGE_PENDING:
      return { ...state, uploadProfileImageLoading: true };
    case ActionTypes.UPLOAD_PROFILE_IMAGE_ERROR:
      return { ...state, uploadProfileImageLoading: false };
    case ActionTypes.UPLOAD_PROFILE_IMAGE_SUCCESS:
      return { ...state, uploadProfileImageLoading: false };

    case ActionTypes.CHANGE_USER_NAME_PENDING:
      return { ...state, changeUserNameLoading: true };
    case ActionTypes.CHANGE_USER_NAME_ERROR:
      return { ...state, changeUserNameLoading: false };
    case ActionTypes.CHANGE_USER_NAME_SUCCESS:
      return { ...state, changeUserNameLoading: false };
    //edit user profile info
    case ActionTypes.EDIT_USER_PROFILE_INFO_PENDING:
      return { ...state, editUserProfileInfoLoading: true };
    case ActionTypes.EDIT_USER_PROFILE_INFO_ERROR:
      return { ...state, editUserProfileInfoLoading: false };
    case ActionTypes.EDIT_USER_PROFILE_INFO_SUCCESS:
      return { ...state, editUserProfileInfoLoading: false, userPublicProfileData: action.payload };

    case ActionTypes.CHANGE_PROFILE_IMAGE:
      return { ...state, profileImage: action.payload };
      // =================== show modal ============
    case ActionTypes.SHOW_MODAL:
      return {...state, modal: action.payload}
    // =============================================
    case ActionTypes.CHANGE_USER_NAME:
      return { ...state, userName: action.payload };
      case ActionTypes.CHANGE_YEARLY_RANK:
        return { ...state, yearlyRank: action.payload };
      case ActionTypes.CHANGE_MONTHLY_RANK:
        return { ...state, monthlyRank: action.payload };
        case ActionTypes.CHANGE_NETWORK_SCORE:
          return { ...state, networkScores: action.payload };
        case ActionTypes.CHANGE_SCIENTIFIC_SCORE:
          return { ...state, scientificScores: action.payload };
        case ActionTypes.CHANGE_STAR_COUNT:
          return { ...state, starCount: action.payload };

        case ActionTypes.LOG_OUT_Mode:
          return { ...state, logOutMode: action.payload };
    default:
      return state;
  }
};
export default profileReducer;
