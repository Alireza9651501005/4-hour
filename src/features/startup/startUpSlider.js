import React, {Component} from 'react';
import {View, Dimensions, TouchableOpacity, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel'; // 3.6.0
// import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';
import {entries} from './data';
import StartupSliderItem from './components/StartupSliderItem';
import EnterToHome from './components/EnterToHome';
import { sizes } from '../../utils/constants/theme';
export default class StartUpSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Carousel
          ref={ref => (this.carouselRef = ref)}
          data={entries}
          renderItem={({item}) => <StartupSliderItem item={item} />}
          onSnapToItem={i => this.setState({activeTab: i})}
          sliderWidth={sizes.screenWidth}
          itemWidth={sizes.screenWidth}
          slideStyle={{width: sizes.screenWidth}}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
        />
        <View style={styles.arrows}>
          <TouchableOpacity
            onPress={() => {
              this.carouselRef.snapToPrev();
            }}>
            <Image
              style={styles.arrowImage}
              source={require('../../assets/images/arrows/arrowLeft.png')}
            />
          </TouchableOpacity>
          <EnterToHome />
          <TouchableOpacity
            onPress={() => {
              this.carouselRef.snapToNext();
            }}>
            <Image
              style={styles.arrowImage}
              source={require('../../assets/images/arrows/arrowRight.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tabBar}>
          <Pagination
            containerStyle={styles.tabsContainer}
            activeDotIndex={this.state.activeTab}
            dotsLength={3}
            tappableDots={!!this.carouselRef}
            carouselRef={this.carouselRef}
          />
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
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: '20@s',
    borderColor: '#ddd',
  },
  arrows: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    right: 0,
    bottom: '45@mvs',
    borderColor: '#ddd',
    zIndex: 99,
  },
  arrowImage: {
    resizeMode: 'contain',
  },
  tabsContainer: {
    flexDirection: 'row',
    height: '50@ms',
    paddingTop: 0,
    paddingBottom: 0,
  },
});
