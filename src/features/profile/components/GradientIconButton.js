import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {fontSize20} from '../../../utils/helper/fontSizes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../../utils/constants/theme';
import {CText} from '../../../utils/components/CText';
import {ScaledSheet} from 'react-native-size-matters';
const GradientIconButton = ({title, onPress, icon, style}) => {
  const btnStyle = [styles.container, style];
  return (
    <TouchableOpacity>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={colors.buttonGradient}
        style={btnStyle}
      >
        <View style={styles.iconbutton}>
          <CText style={styles.title}>{title}</CText>
          <Image style={styles.imgg} source={icon} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = ScaledSheet.create({
  container: {
    width: '170@s',
    height: '45@vs',
    borderRadius: '20@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: fontSize20,
  },
  imgg: {
    width: '5s',
    height: '5s',
    resizeMode: 'contain',
    marginLeft: '5s',
  },
  iconbutton: {
    flexDirection: 'row',
  },
});

export {GradientIconButton};
