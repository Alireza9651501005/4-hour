import Axios from 'axios';
import { store } from '../../../store/store';
import { Alert } from 'react-native';
import NetInfo, {
  NetInfoStateType,
  NetInfoVpnState,
} from '@react-native-community/netinfo';
import { factory, os, os_ver, uuid } from '../../constants/deviceInformations';
// import { changeToken, saveAccessToken, saveRefreshToken } from "../../store/globalActions";
import CToast from '../../components/CToast';
import { setAccessToken, setRefreshToken } from '../../../store/globalActions';
import navigationService from '../navigation/navigationService';

const clientSecret =
  "WtVEK|6le7uH1c%B+TEo54w!(x4hl2*s$UJ7$D+o|y0G2V1idUUX)7ol@$cc`znW,TnL@#cU8)AztB4s$NA!S*3wN,x*1oabqDUL"
const clientId = '1ee^x%72m3PPaTS9twwbkjdsfa43#6$';
const showMessage = message => {
  if (message.popup) {
    Alert.alert(message.message);
  } else {
    CToast(message.message, message.type);
    // console.log('api service',message)
  }
};
export const apiRequest = ({
  type,
  url,
  params,
  onSuccess,
  onFailed,
  myFunc,
  isToken,
  extraData,
  toastOff,
  clientSec,
  deleteTokenFieldInHeader,
  isChangeToken,
}) => {
  if (type === 'post') {
    apiCall = Axios.post;
  } else if (type === 'get') {
    apiCall = Axios.get;
  } else if (type === 'put') {
    apiCall = Axios.put;
  } else if (type === 'delete') {
    apiCall = Axios.delete;
  }

  // let token = '';
  let state = store.getState();

  token = state.globalReducer.accessToken;
  Axios.defaults.headers.common['device_uuid'] = uuid;
  Axios.defaults.headers.common['client_id'] = clientId;

  if (deleteTokenFieldInHeader) {
    delete Axios.defaults.headers.common['Authorization'];
  }
  if (clientSec) {
    Axios.defaults.headers.common['client_secret'] = clientSecret;
  }
  if (token ? token.length > 2 : false) {
    Axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  } else {
    delete Axios.defaults.headers.common['Authorization'];
    Axios.defaults.headers.common['os'] = os === 'android' ? 1 : 2;
    Axios.defaults.headers.common['os_version'] = os_ver;
    Axios.defaults.headers.common['device_brand'] = factory;
  }

  apiCall(url, params)
    .then(response => {
      console.log('response', response);
      if (response.data.message && !toastOff) {
        showMessage(response.data.message);
      }
      onSuccess(response, extraData);
    })
    .catch((error, response) => {
      onFailed(error, extraData);
      console.log('response error', error.response);

      if (error.response) {
        if (error.response.data.message) {
          showMessage(error.response.data.message);
        }
        if (error.response.status == 401) {
          if (!isChangeToken) {
            // store.dispatch(changeToken(onFailed("error",extraData), myFunc));
          }
        } else if (error.response.status == 403) {
          store.dispatch(setAccessToken(''))
          store.dispatch(setRefreshToken(''))
          navigationService.resetFirst('TargetScreen')
        } else if (
          error.response.status >= 400 &&
          error.response.status < 500
        ) {
          console.log(' response ', error.response);
        } else if (error.response.status >= 500) {
          console.log(' response ', error.response);
        }
      } else if (error.request) {
        //no response
        console.log('no response error', error.request);
      } else {
        //error in setting up the request
      }
    });
};
