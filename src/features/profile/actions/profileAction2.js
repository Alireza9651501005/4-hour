import {store} from '../../../store/store';
import {apiRequest} from '../../../utils/services/network/apiService';
import * as ActionTypes from './ActionTypes';
import {getProfile, logOutApi, uploadProfileImageApi, changeUserNameApi, editeUserProfileInfo } from '../../../utils/constants/apiUrl';
import * as NavigationService from '../../../utils/services/navigation/navigationService';

// ========== show / off Modal =====================
export const showModal = (value) => ({
  type: ActionTypes.SHOW_MODAL,
  payload: value
})
// ==================================================

// =============== PROFILEINFO ===================

export const changeName = (value) => ({
  type: ActionTypes.CHANGE_NAME,
  payload: value
})

export const changeUserName = (value) => ({
  type: ActionTypes.CHANGE_USER_NAME,
  payload: value
})

export const changeCertificate = (value) => ({
  type: ActionTypes.CHANGE_CERTIFICATE,
  payload: value
})

export const changeField = (value) => ({
  type: ActionTypes.CHANGE_FIELD,
  payload: value
})

export const changeCity = (value) => ({
  type: ActionTypes.CHANGE_CITY,
  payload: value
})

export const changeCountry = (value) => ({
  type: ActionTypes.CHANGE_COUNTRY,
  payload: value
})

export const changeGender = (value) => ({
  type: ActionTypes.CHANGE_GENDER,
  payload: value
})

// ==========================get profile data==============================
export const getprofilePending = () => ({
    type: ActionTypes.GET_PROFILE_PENDING,
  });
  export const getprofileError = error => ({
    type: ActionTypes.GET_PROFILE_ERROR,
    error: error,
  });
  export const getprofileSuccess = value => ({
    type: ActionTypes.GET_PROFILE_SUCCESS,
    payload: value,
  });
  const getprofileOnSuccess = (response, exData) => {
    let data = response.data.data;
    let userName = data.username;
    console.log("================PROFILE ON SUXCCES================", data)
    console.log("================username================", data.userName)
    store.dispatch(getprofileSuccess(response.data.data));
    // store.dispatch(changeUserNameAc(userName))
    // exData.callback(response.data.data)
  };
  const getprofileOnFailed = error => {
    store.dispatch(getprofileError(error));
  
    // exData.callback('error')
  };
  export const getprofile = () => dispatch => {
    dispatch(getprofilePending());
    // callback('pending')
    apiRequest({
      type: 'get',
      url: getProfile,
      onSuccess: getprofileOnSuccess,
      onFailed: getprofileOnFailed,
    });
  };
  

  export const changeProfileImage = value => ({
    type: ActionTypes.CHANGE_PROFILE_IMAGE,
    payload: value,
  });
  export const changeUserNameAc = value => ({
    type: ActionTypes.CHANGE_USER_NAME,
    payload: value,
  });

  
export const logOutMode = value => ({
  type: ActionTypes.LOG_OUT_Mode,
  payload: value,
});

//log out profile
export const logOutPending = () => ({
  type: ActionTypes.LOG_OUT_PENDING,
});
export const logOutError = error => ({
  type: ActionTypes.LOG_OUT_ERROR,
  error: error,
});
export const logOutSuccess = value => ({
  type: ActionTypes.LOG_OUT_SUCCESS,
  payload: value,
});

const logOutOnSuccess = async (response, exData) => {
  // NavigationService.navigate('Home')
  // NavigationService.navigate('Home')
  exData.callback('success');
  store.dispatch(logOutSuccess());
  store.dispatch(saveAccessToken(''));
  store.dispatch(saveRefreshToken(''));
  store.dispatch(getprofileSuccess({image: null}));
  store.dispatch(getHomeData());
  NavigationService.navigate('Home');
};
const logOutOnFailed = (error, exData) => {
  store.dispatch(logOutError('error'));
  exData.callback('error');
};
export const logOut = callback => dispatch => {
  dispatch(logOutPending());
  dispatch(logOutMode(true));
  // callback()
  apiRequest({
    type:'post',
    url: logOutApi,
    onSuccess:logOutOnSuccess,
    onFailed:logOutOnFailed,
    // logOut(),
    // true,
    // {callback},
  });
};


// upload profile image

export const uploadProfileImagePending = () => ({
  type: ActionTypes.UPLOAD_PROFILE_IMAGE_PENDING
});
export const uploadProfileImageError = (error) => ({
  type: ActionTypes.UPLOAD_PROFILE_IMAGE_ERROR,
  error: error
});
export const uploadProfileImageSuccess = () => ({
  type: ActionTypes.UPLOAD_PROFILE_IMAGE_SUCCESS,
});
const uploadProfileImageOnSuccess = (response) => {
  let state = store.getState()
  let profileReducerData = state.profileReducer.profileData;
  // profileReducerData.image_url = state.profileReducer.profileImage;
  profileReducerData.image = response.data.data.image;
  profileReducerData.image_exist = !profileReducerData.image_exist;
  store.dispatch(getprofileSuccess(profileReducerData))    
  store.dispatch(changeProfileImage(false))
  store.dispatch(uploadProfileImageSuccess())
  store.dispatch(geteUserProfileInfoAction())
  // let closeModalHelper = () => { };
  // store.dispatch(showModalConfirm(false, uploadProfileText, closeModalHelper, closeModalHelper, null, null))
};
const uploadProfileImageOnFailed = (error) => {
  store.dispatch(uploadProfileImageError(error))
};
export const uploadProfileImageAc = (image, method) => (dispatch) => {
  const formData = new FormData();
  console.log("=========IMAGE FROM UPLOADAC =============", image)
  formData.append("file", image);
  dispatch(uploadProfileImagePending())
  apiRequest({
      type: method ? method : 'post',
      url: uploadProfileImageApi,
      formData,
      onSuccess: uploadProfileImageOnSuccess,
      onFailed: uploadProfileImageOnFailed,
      params: formData,
      // uploadProfileImageAc(image),
      // true,
      // null,
      // false,
      // false
  })
}


// ===========================

export const changeUserNamePending = () => ({
  type: ActionTypes.CHANGE_USER_NAME_PENDING,
});
export const changeUserNameError = error => ({
  type: ActionTypes.CHANGE_USER_NAME_ERROR,
  error: error,
});
export const changeUserNameSuccess = () => ({
  type: ActionTypes.CHANGE_USER_NAME_SUCCESS,
});
const changeUserNameOnSuccess = (response, exData) => {
  let state = store.getState();
  let profileReducerData = state.profileReducer.profileData;
  profileReducerData.username = state.profileReducer.userName;
  let closeModalHelper = () => {};
  store.dispatch(
    showModalConfirm(
      false,
      uploadProfileText,
      closeModalHelper,
      closeModalHelper,
      null,
      null,
    ),
  );
  exData.callback();
  store.dispatch(changeUserNameSuccess());
};
const changeUserNameOnFailed = (error, exData) => {
  store.dispatch(changeUserNameError(error));
  let closeModalHelper = () => {};
  store.dispatch(
    showModalConfirm(
      false,
      uploadProfileText,
      closeModalHelper,
      closeModalHelper,
      null,
      null,
    ),
  );
  exData.callback();
};
export const updateUserNameAction = (userName, callback) => dispatch => {
  const formData = new FormData();
  formData.append('username', userName);
  dispatch(changeUserNamePending());
  apiRequest({
    type:'post',
    type: changeUserNameApi,
    // changeUserNameApi,
    formData,
    onSuccess:changeUserNameOnSuccess,
    onFailed: changeUserNameOnFailed,
    // updateUserNameAction(userName, callback),
    // true,
    // {callback},
  });
};

// edite user profile info

export const editUserProifleInfoPending = () => ({
  type: ActionTypes.EDIT_USER_PROFILE_INFO_PENDING,
});
export const editUserProifleInfoError = error => ({
  type: ActionTypes.EDIT_USER_PROFILE_INFO_ERROR,
  error: error,
});
export const editUserProifleInfoSuccess = value => ({
  type: ActionTypes.EDIT_USER_PROFILE_INFO_SUCCESS,
  payload: value,
});
const editUserProifleInfoOnSuccess = (response, exData) => {
  //console.log('response.data.data', response.data.data)
  store.dispatch(getprofile())
  store.dispatch(editUserProifleInfoSuccess(response.data.data))
};
const editUserProifleInfoOnFailed = (error, exData) => {
  store.dispatch(editUserProifleInfoError(error))
};
export const editeUserProfileInfoAction =
  (name, username, certificate, field, city, country, gender) =>
  dispatch => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('username', username);
    formData.append('certificate', certificate);
    formData.append('field', field);
    formData.append('city', city);
    formData.append('country', country);
    formData.append('gender', gender);
    console.log("===name===::", name)
    console.log("===username===::", username)
    // callback('pending');
    dispatch(editUserProifleInfoPending());
    apiRequest({
      type:'post',
      url: editeUserProfileInfo,
      // formData,
      onSuccess: editUserProifleInfoOnSuccess,
      onFailed: editUserProifleInfoOnFailed,
      params: formData,
      // editeUserProfileInfoAction(
      //   name,
      //   email,
      //   userName,
      //   education,
      //   job,
      //   city,
      //   birthDate,
      //   resume,
      //   callback,
      // ),
      // true,
      });
  };
// get user profile info

export const getUserProifleInfoPending = () => ({
  type: ActionTypes.GET_USER_PROFILE_INFO_PENDING,
});
export const getUserProifleInfoError = error => ({
  type: ActionTypes.GET_USER_PROFILE_INFO_ERROR,
  error: error,
});
export const getUserProifleInfoSuccess = value => ({
  type: ActionTypes.GET_USER_PROFILE_INFO_SUCCESS,
  payload: value,
});
const getUserProifleInfoOnSuccess = (response, exData) => {
  let data = response.data.data;
  //console.log('response.data.data', data)
  store.dispatch(getUserProifleInfoSuccess(response.data.data))
  exData.callback(data)
};
const getUserProifleInfoOnFailed = (error, exData) => {
  store.dispatch(getUserProifleInfoError(error))
  exData.callback('error')
};
export const geteUserProfileInfoAction = (callback) => (dispatch) => {
  callback('pending');
  dispatch(getUserProifleInfoPending());
  apiRequest({
    type:'get',
    url: editeUserProfileInfo,
    onSuccess: getUserProifleInfoOnSuccess,
    onFailed: getUserProifleInfoOnFailed,
    params: false,
    // geteUserProfileInfoAction(callback),
    // true,
    extraData: {callback},
  });
};
