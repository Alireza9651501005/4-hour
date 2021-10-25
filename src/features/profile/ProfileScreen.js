import React, {useEffect, useState} from 'react';
import ProfileInfo from './components/ProfileInfo';
import ProfileButtons from './components/ProfileButtons';
import ProfileTopSection from './components/ProfileTopSection';
import {
  getprofile,
  changeUserNameAc,
  updateUserNameAction,
} from './actions/profileAction2';
import {ImageBackground, View, StyleSheet} from 'react-native';
import {ScaledSheet, scale, verticalScale} from 'react-native-size-matters';
import {CText} from '../../utils/components';
import {fontSize16, fontSize20, fontSize14} from '../../utils/helper/fontSizes';
import {useDispatch, useSelector} from 'react-redux';
import {ProfileComplete} from './texts';
import ModalProfile from './ModalProfile';
import {colors} from '../../utils/constants/theme'
function ProfileScreens(props) {
  const dispatch = useDispatch();
  const states = useSelector(state => state);
  let profileData = states.profileReducer;

  useEffect(() => {
    dispatch(getprofile());
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/splash-bg.png')}
        style={styles.container1}
        imageStyle={{borderBottomRightRadius: scale(30), borderBottomLeftRadius: scale(30)}}
      >
        <ProfileTopSection />
        {profileData.profileData.name ? (
          <ProfileInfo />
        ) : (
          <CText textType="demiBold" style={styles.completeProfile}>
            {ProfileComplete}
          </CText>
        )}
      </ImageBackground>
      <ProfileButtons />
      <ModalProfile />
    </View>
  );
}

export default ProfileScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.profileBackground,
  },
  profileInfo: {
    color: colors.whiteBg,
    fontSize: fontSize16,
    marginBottom: verticalScale(50),
  },
  profileInfoName: {
    color: colors.whiteBg,
    fontSize: fontSize20,
    marginBottom: verticalScale(39),
    alignSelf: 'center',
  },
  profileInfoCV: {
    color: colors.whiteBg,
    fontSize: fontSize16,
    marginBottom: verticalScale(39),
    marginRight: scale(30),
  },
  completeProfile: {
    color: colors.whiteBg,
    fontSize: fontSize16,
    marginBottom: scale(50),
    marginTop: scale(20),
  },
  profileInfoContainer: {
    flexDirection: 'row',
    width: scale(25),
    justifyContent: 'space-between',
    // marginBottom: '50@vs',
  },
  container1: {
    //   flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    resizeMode: 'contain',
    // height: verticalScale(400),
    marginBottom: scale(30),
  },
});
