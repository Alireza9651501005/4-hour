import React from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { CText } from '../../../utils/components';
import { fontSize40, fontSize20 } from '../../../utils/helper/fontSizes';

export default function StartupSliderItem({ item, index }) {
  return (
    <View style={styles.totalView}>
      <Image source={item.pic} style={styles.Imgg} />
      <View style={styles.threeText}>
        <CText textType={'light'} style={styles.title11}>{item.title}</CText>
        <CText textType={'ultraBold'} style={styles.firstLine}>{item.firstLine}</CText>
        <CText textType={'ultraBold'} style={styles.secondLine}>{item.secondLine}</CText>
      </View>
    </View> // or { flex: 1 } for responsive height: ;
  );
}

const styles = ScaledSheet.create({
  title11: {
    color: '#707070',
    fontSize: fontSize20,
  },
  totalView: {
    flex: 1,
    alignItems: 'center',
    // borderWidth:1
  },
  Imgg: {
    width: '200@s',
    height: '150@s',
    resizeMode: 'contain',
  },
  firstLine: {
    fontSize: fontSize40,
    color: '#240046',
    // borderWidth:1
  },
  secondLine: {
    fontSize: fontSize40,
    color: '#ff9e00',
  },
  threeText: {
    marginTop: '30@mvs',
    paddingRight: '31@ms',
    width: '100%',
    // borderWidth:1,
  },
});
