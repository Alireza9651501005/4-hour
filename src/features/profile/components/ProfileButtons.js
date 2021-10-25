import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientIconButton} from './GradientIconButton';
import {ScaledSheet, scale} from 'react-native-size-matters';
import * as NavigationService from '../../../utils/services/navigation/navigationService'
import {colors} from '../../../utils/constants/theme';
import {CText} from '../../../utils/components/CText';
// import navigationService from '';
import {fontSize14, fontSize20} from './../../../utils/helper/fontSizes';
import navigationService from '../../../utils/services/navigation/navigationService';
import {headerTextEdit, settingPageHeaderText} from '../texts'
export default function ProfileButtons(props) {
  const handleOnExamPress = () => {
    navigationService.navigate('EditProfileTwo')
  }
  return (
    <View style={styles.mainContainer}>
      {/* <GradientIconButton
        title="تنظیمات حساب"
        icon={require(`./../../assets/profile/setting.png`)}
      />
      <GradientIconButton
        title="ویرایش پروفایل"
        icon={require(`./../../assets/profile/edit_profile.png`)}
      /> */}
      <TouchableOpacity>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={colors.buttonGradient}
          style={styles.container}
        >
          <View style={styles.iconbutton}>
            <CText style={styles.title}>{settingPageHeaderText}</CText>
            <Image
              style={styles.imgg2}
              source={require(`../../../assets/profile/account-tune.png`)}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOnExamPress}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={colors.buttonGradient}
          style={styles.container}
        >
          <View style={styles.iconbutton}>
            <CText style={styles.title}>{headerTextEdit}</CText>
            <Image
              style={styles.imgg}
              source={require('../../../assets/profile/edit-profile.png')}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = ScaledSheet.create({
  mainContainer: {
    width: '300@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  container: {
    width: '145@s',
    height: '42@vs',
    borderRadius: '20@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: fontSize14,
  },
  imgg: {
    width: '16@s',
    height: '16@s',
    resizeMode: 'contain',
    marginLeft: '5@s',
    marginBottom: '5@s'
  },
  imgg2: {
    width: '20@s',
    height: '20@s',
    resizeMode: 'contain',
    marginLeft: '5@s',
    marginBottom: '3@s'
  },
  iconbutton: {
    flexDirection: 'row',
    width: '100@s',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: '-10@s'
  },
});
