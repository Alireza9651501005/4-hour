import { combineReducers } from 'redux';
import homeReducer from '../features/home/reducers/homeReducer';
import splashReducer from '../features/splash/reducers/splashReducer';
import globalReducer from './globalReducer';
import profileReducer from '../features/profile/reducers/profileReducer';
import verifyCodeReducer from '../features/auth/reducers/verifyCodeReducer';
import authReducer from '../features/auth/reducers/authReducer';
import purchaseReducer from '../features/purchase/reducers/purchaseReducer';
import courseReducer from '../features/course/reducers/courseReducer';
import lessonReducer from '../features/lesson/reducers/lessonReducer';
import commentsReducer from '../features/comments/reducers/commentsReducer';
export default combineReducers({
    homeReducer,
    splashReducer,
    globalReducer,
    verifyCodeReducer,
    profileReducer,
    authReducer,
    purchaseReducer,
    courseReducer,
    lessonReducer,
    commentsReducer
})