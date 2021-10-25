import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { colors, sizes } from '../../utils/constants/theme';
import { getHomeData } from './actions/homeAction';
import AnimatedHome from './components/AnimatedHome'
import { RetryButton } from '../../utils/components';
// import AnimatedHomeList from './components/AnimatedHomeList';

function HomeScreen(props) {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const loading = state.homeReducer.loading
  const error = state.homeReducer.error
  const homeData = state.homeReducer.homeData

  useEffect(() => {
    getHomeData()
  }, [])
  return (
    <View style={styles.container}>
      {loading || error ?
        <RetryButton
          onPress={getHomeData}
          loading={loading}
        />
        :
        <AnimatedHome
          onPullDown={getHomeData}
          data={homeData}
        />
        // <AnimatedHomeList
        //   onPullDown={getHomeData}
        //   data={homeData}
        // />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBG
    // borderWidth:2,
    // borderColor:'red'
  },
  spinnerWrapper: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HomeScreen;
