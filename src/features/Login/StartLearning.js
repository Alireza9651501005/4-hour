import React from 'react';
import { ImageBackground, View } from 'react-native';
import { colors } from '../../utils/constants/theme';
import { CText, ButtonText } from '../../utils/components';
import { GradientButton } from '../../utils/components/GradientButton';
import { ScaledSheet } from 'react-native-size-matters';
import { fontSize30, fontSize20, fontSize14, fontSize25, fontSize16 } from '../../utils/helper/fontSizes';
import FourhourPrice from './fourhourPrice';
import {
  Register,
  StartLearninTitle,
  StartLearningDescription,
  ByCourse,
  EnterCode,
  UseFreeContent,
} from './text';
import navigationService from '../../utils/services/navigation/navigationService';
import { useSelector } from 'react-redux';
function StartLearning({ route, navigation }) {

  const state = useSelector(state => state)
  const accessToken = state.globalReducer.accessToken
  const onBuyButtonClick = () => {
    if(accessToken.length>2){
      navigation.navigate('Discount')
    }else{
      navigation.navigate('TargetScreen')
    }
  }

  const onEnterCodeButtonClick = () => {
    if(accessToken.length>2){
    navigation.navigate('PurchaseCode')
    }else{
      navigation.navigate('TargetScreen')
    }
  }

  const onRegisterLaterButtonClick = () => {
    navigationService.resetFirst('Home')
  }

  return (
    <ImageBackground
      source={require('../../assets/images/splash-bg.png')}
      style={styles.container}
    >
      <View style={styles.firstSection}>
        {/* <View style={styles.login}>
          <CText textType="medium" style={styles.register1}>
            {Register}
          </CText>
        </View> */}
        <FourhourPrice />
      </View>
      <View style={styles.secondSection}>
        <View style={styles.mainText}>
          <CText textType="ultraBold" style={styles.titleText}>
            {StartLearninTitle}
          </CText>
          <CText textType="light" style={styles.bodyText}>
            {StartLearningDescription}
          </CText>
        </View>
        <View style={styles.register}>
          <GradientButton
            onPress={onBuyButtonClick}
            textType="demiBold"
            style={styles.byeCourseBtn}
            title={ByCourse}
          />
          <GradientButton
            onPress={onEnterCodeButtonClick}
            textType="demiBold" title={EnterCode} />
          <ButtonText
            onPress={onRegisterLaterButtonClick}
            title={UseFreeContent} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = ScaledSheet.create({
  firstSection: {
    overflow: 'hidden',
    width: '100%',
    marginTop: '45@vs'
  },
  secondSection: {
    flex: 1,
  },
  register1: {
    color: colors.white,
    fontSize: fontSize14,
  },

  titleText: {
    color: colors.white,
    fontSize: fontSize25,
    alignSelf: 'center',
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
    height: '250@vs',
    resizeMode: 'contain'
  },
  login: {
    fontSize: fontSize14,
    margin: '22@s',
    marginBottom: '16@s',
  },
  mainText: {
    width: '280@s',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: '16@vs',
  },
  register: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  byeCourseBtn: { margin: '16@vs' },
});

export default StartLearning;
