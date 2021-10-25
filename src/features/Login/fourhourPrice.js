import React from 'react';
import {View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Toman, FourhourPriceDescription} from './text';
import LinearGradient from 'react-native-linear-gradient';
import {CText} from '../../utils/components';
import {
  fontSize14,
  fontSize20,
  fontSize30,
} from './../../utils/helper/fontSizes';
const priceSeparator = price => {
  let p = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '/');
  return p;
};

const FourhourPic = require('../../assets/images/sliders/fourhour.png');
export default function FourhourPrice() {
  return (
    <View style={styles.outer}>
      <LinearGradient
        colors={['#ffffff', '#c5c5c5']}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <Image source={FourhourPic} style={styles.Pic} />
          <View style={styles.Description}>
            <CText textType="light" style={styles.description2}>
              {FourhourPriceDescription}
            </CText>
          </View>
          <View style={styles.Price}>
            <CText textType="medium" style={styles.toman}>
              {Toman}
            </CText>
            <View style={styles.prices}>
              <CText textType="ultraBold" style={styles.mainprice}>
                {priceSeparator(364)}
              </CText>
              <CText style={styles.threezero}>/000</CText>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Description: {
    width: '160@s',
  },
  Price: {
    flexDirection: 'row',
    width: '130@s',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '20@vs',
  },
  mainprice: {
    fontSize: fontSize30,
  },
  description2: {
    fontSize: fontSize14,
    color: '#240046',
  },
  toman: {
    fontSize: fontSize20,
  },
  threezero: {
    marginTop: '17@s',
  },
  prices: {
    flexDirection: 'row',
  },
  Pic: {
    width: '100@s',
    height: '120@vs',
    alignSelf: 'center',
    marginHorizontal: '20@s',
    marginTop: '10@s',
    resizeMode: 'contain',
  },
  linearGradient: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: '200@s',
    paddingHorizontal:'10@s',
    height: '280@vs',
  },
  outer: {
    borderRadius: '15@s',
    // width: '150@s',
    height: '280@vs',
    borderWidth: '5@s',
    overflow: 'hidden',
    borderColor: '#240046',
    alignSelf: 'center',
  },
});
