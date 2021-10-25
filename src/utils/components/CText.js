import React, {useRef} from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  danaBold,
  danaDemiBold,
  danaLight,
  danaRegular,
  danaUltraBold,
  danaMedium,
  iranSans,
} from '../constants/fonts';
import {colors} from '../constants/theme';

function CText(props) {
  const ref1 = useRef(null);

    let textTypeStyle = calculateTextType(props.textType)

    return (
        <Text
            {...props}
            allowFontScaling={false}
            style={[styles.textStyle, props.style, textTypeStyle]}
        >
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'right',
    fontFamily: danaRegular,
    color: colors.textBlack,
    borderWidth:1,
    borderColor:'transparent'
  },
});

const calculateTextType = type => {
  let typeStyle = {};
  switch (type) {
    case 'bold':
      return {fontFamily: danaBold};

    case 'demiBold':
      return {fontFamily: danaDemiBold};

    case 'ultraBold':
      return {fontFamily: danaUltraBold};

    case 'light':
      return {fontFamily: danaLight};

    case 'medium':
      return {fontFamily: danaMedium};

    case 'iranSans':
      return {fontFamily: iranSans};
      
    default:
      return {fontFamily: danaRegular};
  }
};

export {CText};
