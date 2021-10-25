import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { fontSize16, fontSize20 } from '../helper/fontSizes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors, sizes } from '../constants/theme';
import { CText } from './CText';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import Spinner from 'react-native-spinkit';
const GradientButton = ({ title, textType, onPress, loading,style, disable }) => {
  const btnStyle = [styles.container, style];
  return (
    <TouchableOpacity
      disabled={loading || disable}
      onPress={onPress}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors.buttonGradient}
        style={btnStyle}>
        {loading ?
          <Spinner isVisible={true} size={sizes.buttonSpinnerSize} type={'ThreeBounce'} color={colors.spinner} />
          :
          <CText textType={textType} style={styles.title}>{title}</CText>
        }
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = ScaledSheet.create({
  container: {
    width: scale(149),
    height: verticalScale(45),
    borderRadius: '20@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: fontSize16,
  },
});

export { GradientButton };
