import React from 'react';
import { useEffect } from 'react';
import Orientation from 'react-native-orientation';
import { ImageBackground, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { getSplashApi } from './actions/splashAction';
import Spinner from 'react-native-spinkit';
import { colors, sizes } from '../../utils/constants/theme';
import { useSelector } from 'react-redux';
import { scale, verticalScale } from 'react-native-size-matters';
import { CText } from '../../utils/components';
function SplashScreen(props) {

  const state = useSelector(state => state)
  const loading = state.splashReducer.loading;
  const error = state.splashReducer.error

  useEffect(() => {
    Orientation.lockToPortrait();
    getSplashApi()
    return () => {

    }
  }, [])

  return (
    <ImageBackground
      source={require('../../assets/images/splash-bg.png')}
      style={styles.container}>
      <Image
        source={require('../../assets/images/logo-white.png')}
        style={styles.logoStyle}
      />

      <View style={{ position: 'absolute', bottom: verticalScale(150) }}>
        {
          error ?
            <TouchableOpacity
              onPress={() => { getSplashApi() }}
            >
              <Image
                source={require('../../assets/images/common/refresh.png')}
                style={styles.refreshIcon}
              />
            </TouchableOpacity>
            :
            <Spinner
              isVisible={loading}
              size={sizes.spinnerSize}
              type={"ThreeBounce"}
              color={colors.spinner}
            />
        }

      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: scale(180),
    resizeMode: 'contain'
  },
  refreshIcon: {
    width: scale(40),
    height: scale(40),
    resizeMode: 'contain'
  }
});

export default SplashScreen;
