import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {showModal} from '../actions/profileAction2';
import {colors} from '../../../utils/constants/theme';
import {CText} from '../../../utils/components';
import {fontSize30} from '../../../utils/helper/fontSizes';
export default function ProfileTopSection() {
  const states = useSelector(state => state);
  const dispatch = useDispatch();
  let profileData = states.profileReducer;
  //
  console.log('===============PROFILE DATA==================', profileData);

  return (
    <TouchableOpacity
      style={styles.whole}
      onPress={() => dispatch(showModal(true))}
    >
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
            <Image
              source={profileData.profileData.image?{uri: profileData.profileData.image}:require('../../../assets/images/common/no-image.png')}
              style={styles.profileImgg}
            />
        </View>
      </View>
      {profileData.profileData.personal_type ? (
        <View style={styles.PersonType}>
          <CText style={styles.personTypeText}>
            {profileData.profileData.personal_type}
          </CText>
        </View>
      ) : (
        <View style={styles.PersonType2}>
          <CText style={styles.personTypeText}>?</CText>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  whole: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerContainer: {
    top: verticalScale(26),
    padding: verticalScale(5),
    borderRadius: verticalScale(1000),
    backgroundColor: colors.white,
  },
  profileImgg: {
    width: verticalScale(155),
    height: verticalScale(155),
    resizeMode: 'contain',
  },
  innerContainer: {
    borderWidth: verticalScale(3.5),
    borderRadius: verticalScale(1000),
    width: verticalScale(155),
    height: verticalScale(155),
    borderColor: colors.textBlack,
    overflow: 'hidden',
  },
  PersonType: {
    width: verticalScale(49),
    height: verticalScale(49),
    backgroundColor: colors.personType,
    borderRadius: verticalScale(20),
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: verticalScale(3),
    borderColor: colors.buttonPrimary,
  },
  PersonType2: {
    width: verticalScale(49),
    height: verticalScale(50),
    backgroundColor: colors.choosBackground,
    borderColor: colors.buttonPrimary,
    borderRadius: verticalScale(20),
    borderWidth: verticalScale(3),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  personTypeText: {
    color: colors.white,
    fontSize: fontSize30,
  },
  personTypeImgg: {
    width: verticalScale(47),
    height: verticalScale(47),
    resizeMode: 'contain',
  },
});
