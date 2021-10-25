import React from 'react';
import Carousel from 'pinar';
import {Dimensions} from 'react-native';
import {entries} from './data';
import StartupSliderItem from '../startup/components/StartupSliderItem';
import {View, TouchableOpacity, Image} from 'react-native';
import EnterToHome from '../startup/components/EnterToHome';
import {ScaledSheet, scale} from 'react-native-size-matters';

class StartUpSlider extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Carousel
          ref={carousel => {
            this.carousel = carousel;
          }}
          showsControls={false}
          mergeStyles={true}
          dotStyle={{
            opacity: 0.2,
            borderWidth: 1,
            borderColor: '#240046',
            width: scale(6),
            height: scale(6),
            borderRadius: scale(1000),
            marginLeft: scale(5),
            marginRight: scale(5),
          }}
          activeDotStyle={{
            width: scale(10),
            height: scale(10),
            borderRadius: scale(1000),
            backgroundColor: '#240046',
          }}
          dotsContainerStyle={{
            position: 'absolute',
            bottom: -scale(25),
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {entries.map((item, index) => (
            <StartupSliderItem item={item} key={index} />
          ))}
        </Carousel>
        <View style={styles.arrowButtons}>
          <TouchableOpacity
            onPress={() => {
              this.carousel.scrollToPrev();
            }}
          >
            <Image
              style={styles.arrowImage}
              source={require('../../assets/images/arrows/arrowLeft.png')}
            />
          </TouchableOpacity>

          <EnterToHome />
          <TouchableOpacity
            onPress={() => {
              this.carousel.scrollToNext();
            }}
          >
            <Image
              style={styles.arrowImage}
              source={require('../../assets/images/arrows/arrowRight.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: '50@s',
    backgroundColor: '#e5e5e5',
  },
  arrowImage: {
    resizeMode: 'contain',
  },
  arrowButtons: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: '30%',
    height: '50@vs',
  },
});

export default StartUpSlider;
