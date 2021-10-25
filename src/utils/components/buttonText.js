import React from 'react';
// import {View} from 'react-native';
import { CText } from '.';
import { colors } from '../constants/theme';
import { fontSize16, fontSize18 } from '../helper/fontSizes';
import { ScaledSheet } from 'react-native-size-matters';

function ButtonText({ onPress, title }) {
  return <CText onPress={onPress} style={styles.footerText}>{title}</CText>;
}

const styles = ScaledSheet.create({
  footerText: {
    color: colors.footerText,
    fontSize: fontSize16,
    marginTop: '20@vs',
    padding: 1
  },
});

export { ButtonText }