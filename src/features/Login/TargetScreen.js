import React from 'react';
import { ImageBackground, View, Image } from 'react-native';
import { colors, sizes } from '../../utils/constants/theme';
import { CText, ButtonText } from '../../utils/components';
import { GradientButton } from '../../utils/components/GradientButton';
import { ScaledSheet } from 'react-native-size-matters';
import { fontSize30, fontSize20, fontSize14, fontSize25, fontSize16 } from '../../utils/helper/fontSizes';
import {
  RegisterEenter,
  TargetTitle,
  TargetScreenDescription,
  AlreadyRegisterd,
  Register,
  Eenter,
} from './text';
import { useDispatch } from 'react-redux';
import { setAuthMode } from '../auth/actions/authActions';
import navigationService from '../../utils/services/navigation/navigationService';

function TargetScreen({ route, navigation }) {

  const dispatch = useDispatch()
  const handleOnRegisterClick = () => {
    dispatch(setAuthMode('register'))
    navigation.navigate('Login')
  }

  const handleOnLoginClick = () => {
    dispatch(setAuthMode('login'))
    navigation.navigate('Login')
  }

  const handleOnRegisterLaterPress = () => {
    navigationService.resetFirst('Home')
  }

  return (
    <ImageBackground
      source={require('../../assets/images/splash-bg.png')}
      style={styles.container}
    >
      <View style={styles.firstSection}>
        <View style={styles.login}>
          <CText textType="medium" style={styles.register1}>
            {RegisterEenter}
          </CText>
        </View>
        <View style={{}}>
        <Image
          source={require('../../assets/images/Target.png')}
          style={styles.logoStyle}
        />
        </View>
        
      </View>
      <View style={styles.secondSection}>
        <View style={styles.mainText}>
          <CText textType="ultraBold" style={styles.titleText}>
            {TargetTitle}
          </CText>
          <CText textType="light" style={styles.bodyText}>
            {TargetScreenDescription}
          </CText>
        </View>
        <View style={styles.register}>
          <GradientButton
            onPress={handleOnRegisterClick}
            title={Register}
            textType="demiBold"
            style={styles.registerBtn}
          />
          <GradientButton
            onPress={handleOnLoginClick}
            title={Eenter} textType="demiBold" />
          <ButtonText onPress={handleOnRegisterLaterPress} title={AlreadyRegisterd} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = ScaledSheet.create({
  firstSection: {
    // flex: 3,
    overflow: 'hidden',
    width: '100%',
    justifyContent: 'space-between',
    // borderWidth:1
  },
  secondSection: {
    // flex: 4,
    // borderWidth:1
  },
  register1: {
    color: colors.white,
    fontSize: fontSize14,
  },

  titleText: {
    color: colors.white,
    fontSize: fontSize25,
    alignSelf: 'center',
    width: '100%',
    // borderWidth: 1,
    borderColor: '#ffffff00'
  },
  bodyText: {
    color: colors.bodyText,
    fontSize: fontSize16,
  },
  container: {
    flex: 1,
  },
  logoStyle: {
    // width: '200@s',
    height: '220@vs',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  login: {
    fontSize: fontSize14,
    margin: '22@s',
    marginBottom: '16@s',
  },
  mainText: {
    // width: '280@s',
    justifyContent: 'space-between',
    alignSelf: 'center',
    // marginTop: '16@vs',
    paddingHorizontal: sizes.globalMarginHorizontal
  },
  register: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1
  },
  registerBtn: {
    margin: '16@vs',
  },
});

export default TargetScreen;
