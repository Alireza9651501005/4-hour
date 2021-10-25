
import { Dimensions } from 'react-native'
import { s, vs } from 'react-native-size-matters';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';

const colors = {
  spinner: '#fff',
  profileBackground: '#e4e4ea',
  buttonGradient: ['#ae01bd', '#fea98c'],
  textWhite: '#fff',
  textDarkWhite: '#ffffffcc',
  textGrey:'#b6b6b6',
  textBlack: '#240046',
  modaltext2: '#fafafa',
  modaltext1: '#707070',
  modalBorder: '#6339a3',
  profileImageBorder: '#6d4897',
  dropdownBackground: '#f7f7f7',
  choosBackground: '#8151c8',
  grayBorder: '#33240046',
  disable: '#ccc',
  buttonPrimary: '#240046',
  buttonGreen: '#009933',
  white: '#ffffff',
  personType: '#a3c85f',
  bodyText: '#ffffffcc',
  footerText: '#fedaa0',
  codeInputBackground: '#2400461a',
  codeInputActiveBorder: '#898989',
  codeInputInActiveBorder: '#24004633',
  coloredSpinner: '#240046',
  whiteBg: '#fff',
  deletUser: '#ce5176',
  mainBG : '#e5e5e5',
  textYellow:'#fedaa0',
  primary: '#3498db',

}

const sizes = {
  screenWidth: viewportWidth,
  screenHeight: viewportHeight,
  globalRadius: vs(5),
  globalMarginHorizontal: s(36),
  globalMarginVertical: vs(25),
  spinnerSize: s(60),
  buttonSpinnerSize: s(30),
  verticalMargin10: hp(1.5),//10
    verticalMargin20: hp(3),//20
    horizontalMargin7: wp(2),//7.5
    horizontalMargin15: wp(4),//15
};

export { colors, sizes };
