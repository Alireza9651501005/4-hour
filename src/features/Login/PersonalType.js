import React from 'react';
import { ImageBackground, View, Image } from 'react-native';
import { colors } from '../../utils/constants/theme';
import { CText ,ButtonText } from '../../utils/components';
import { GradientButton } from '../../utils/components/GradientButton';
import { ScaledSheet } from 'react-native-size-matters';
import { fontSize30, fontSize20, fontSize14, fontSize25, fontSize18, fontSize16 } from '../../utils/helper/fontSizes';
import {
  DiskTest,
  PersonalTypeTitle,
  DiskTestDescription,
  StartTesting,
  ParticipateInDiskTest,
} from './text';
import navigationService from '../../utils/services/navigation/navigationService';
function PersonalType({ route, navigation }) {

  const handleOnExamPress = () => {
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
            {DiskTest}
          </CText>
        </View>
        <Image
          source={require('../../assets/images/Personal.png')}
          style={styles.logoStyle}
        />
      </View>
      <View style={styles.secondSection}>
        <View style={styles.mainText}>
          <CText textType="ultraBold" style={styles.titleText}>
            {PersonalTypeTitle}
          </CText>
          <View style={styles.bodyText1}>
            <CText textType="light" style={styles.bodyText}>
              {DiskTestDescription}
            </CText>
          </View>
        </View>
        <View style={styles.register}>
          <GradientButton
            onPress={handleOnExamPress}
            textType="demiBold"
            title={StartTesting}
            style={styles.startTest}
          />
          <ButtonText
            onPress={handleOnExamPress}
            title={ParticipateInDiskTest} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = ScaledSheet.create({
  firstSection: {
    overflow: 'hidden',
    width: '100%',
    justifyContent: 'space-between',
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
  },
  bodyText1: {
    // width: '250@s',
    alignSelf: 'flex-end',
  },
  bodyText: {
    color: colors.bodyText,
    fontSize: fontSize16,
  },
  container: {
    flex: 1,
  },
  logoStyle: {
    // width: '260@s',
    height: '260@vs',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  login: {
    fontSize: fontSize14,
    margin: '22@s',
    marginBottom: '16@s',
  },
  mainText: {
    width: '300@s',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: '16@vs',
  },
  startTest: {
    marginTop: '20@s',
  },
  register: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PersonalType;
