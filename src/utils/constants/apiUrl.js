import axios from 'axios';
export const baseUrl = '';
export const baseUrlReal = 'http://4hours.myfreenet.ir/api/v1/';
// export const baseUrlReal = 'http://pms-api.myfreenet.ir/api/v1/'
export const checkUserAccount = 'user/check';
export const loginByCodeApi = 'user/login';
export const registerByCodeApi = 'user/register';
export const startup = 'app/startup';
// export const homeDataApi = 'http://mocky.myfreenet.ir/r/v1/hadi/fourhours/home';
export const homeDataApi = 'app/home';
// export const purchaseCodeApi = 'http://mocky.myfreenet.ir/r/v1/hadi/fourhours/activationcode';
export const purchaseCodeApi = 'payment/activationcode';
// export const discountCodeApi = 'http://mocky.myfreenet.ir/r/v1/hadi/fourhours/discount';
export const discountCodeApi = 'payment/discount';
export const getLessonsApi = 'courses/'//:course id
export const lessonDetailApi = (lessonId) => `courses/lessons/${lessonId}`;
export const likeLessonApi = (lessonId) => `courses/lessons/${lessonId}/like`;
export const lessonCommentsApi =  'courses/lessons/'
export const sendCommentApi = 'courses/lessons/'
export const mentionListApi = 'users/username?q='
// export const register = 'user/register';
// export const verificationCodeApi =  'user/verify';
// export const verificationCode = 'user/checkverificationcode'
// export const resend = 'user/sendsms';
// export const forgotPasswordWS = 'user/forgot-password';
// export const newPass = 'user/forgotpass/password';
// export const refreshToken = 'refresh-token';
// export const issueDetails = 'magazines/issues?id=0';
// export const categories = 'categories';
// export const user = 'user';
// export const education = 'user/education';
// export const checkUsernameToChange = 'user/username/check';
// export const changeUsername = 'user/username';
// export const changePassword = 'user/password';
// export const courseChapters = 'courses/';
// export const courseDownloads = baseUrlReal + 'courses/';
// export const getLessonData = 'courses/chapters/lessons/';
// export const sendInteractiveResilt = 'courses/chapters/lessons/';
export const getProfile = 'user/profile';
export const logOutApi = '/user/profile/logout';
// // export const logOutApi = 'user/logout'
// export const shareAppApi = 'user/share-app';
export const uploadProfileImageApi = '/user/profile/image';
export const changeUserNameApi = 'user/profile/username';
// export const changeCurrentPassword = 'user/profile/change-password';
// export const getLeaderboardApi = 'leaderboard';
// export const leaderboardDetailApi = 'leaderboard/';
// export const searchTermApi = 'app/search';
// export const changePhoneNumber = 'user/profile/phone-number';
// // export const changePhoneNumber = 'user/phone-number/verification-code'
// export const getVerifyCode = 'user/phone-number';
// export const lessonCommentsApi = 'courses/chapters/lessons/';
// export const sendCommentApi = 'courses/chapters/lessons/';
// export const mentionListApi = 'users/username?q=';
// export const optionalInfo = 'user/profile/optional-info';
// export const phoneNumberVerrificationCode =
//   'user/profile/phone-number/verification-code';
// export const courseStatus = 'courses/';
// export const likeLessonApi = 'courses/chapters/lessons/';
export const reactionCommentApi = 'courses/chapters/lessons/comments/';
// export const myCoursesApi = 'user/profile/my-courses';
export const editeUserProfileInfo = 'user/profile/optional-info';
// export const userGainHostoryWb = 'user/profile/score-report';
// export const userMessagesWb = 'user/profile/my-messages';
// export const userFullMessagesWb = 'user/profile/my-messages';
// export const getTransactionsApi = 'user/profile/payment-report';
// export const getCreditApi = 'user/profile/wallet-info';
// export const updateFbTokenWb = 'app/fb-token';

// export const yearlyRankWb = 'user/profile/yearly-rank';
// export const monthlyRankWb = 'user/profile/monthly-rank';

// export const networkingApi = 'user/profile/network-report';
// export const getAwardsApi = '/app/awards';
// export const sendVideoRecordsApi = '/courses/chapters/lessons/video/score';

axios.defaults.baseURL = baseUrlReal;
axios.defaults.headers.common['Accept'] = 'application/json';

// axios.defaults.headers.common['Content-type'] = 'multipart/form-data';
axios.defaults.timeout = 20000;
