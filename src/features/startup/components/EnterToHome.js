import React from 'react';
import { TouchableOpacity } from 'react-native';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import { CText } from '../../../utils/components';
import navigationService from '../../../utils/services/navigation/navigationService';
import { fontSize16 } from './../../../utils/helper/fontSizes';

const EnterToHome = () => {
  const handleOnPress = () => {
    navigationService.navigate('TargetScreen')
  }
  return (
      <TouchableOpacity
        style = {
          {
            // borderWidth: 1,
            paddingHorizontal: scale(40),
            borderRadius: scale(20),
            backgroundColor: '#d5d5d5',
            paddingVertical:verticalScale(3)
          }
        }
        onPress={handleOnPress}
      >
        <CText onPress={handleOnPress} style={styles.enterText}>ورود به برنامه</CText>
      </TouchableOpacity>
  );
}

export default EnterToHome;

const styles = ScaledSheet.create({
  enter: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: '50@s',
  },
  enterText: {
    textAlign: 'center',
    fontSize: fontSize16,
  },
});
