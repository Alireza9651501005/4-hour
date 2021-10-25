import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '../utils/services/navigation/navigationService';
import {setCurrentRouteName} from '../store/globalActions';
import {useDispatch} from 'react-redux';
import HomeScreen from './home/HomeScreen';
import SplashScreen from './splash/SplashScreen';
import StartUpSlider from './starttup2/startupSlider';
import LoginScreen from './auth/LoginScreen';
import TargetScreen from './Login/TargetScreen';
import StartLearning from './Login/StartLearning';
import PersonalType from './Login/PersonalType';
import ProfileScreens from './profile/ProfileScreen';
import EditProfileTwo from './profile/EditProfileTwo';
import VerifyCodeScreen from './auth/VerifyCodeScreen';
import PurchaseCodeScreen from './purchase/PurchaseCodeScreen';
import DiscountScreen from './purchase/DiscountScreen';
import MainTabNav from './tabNavigator/MainTabNav';
import LessonScreen from './lesson/LessonScreen';
const Stack = createNativeStackNavigator();

function Nav() {
  const dispatch = useDispatch();
  return (
    <NavigationContainer
      onStateChange={(prevState, currentState, action) => {
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        dispatch(setCurrentRouteName(currentRouteName));
      }}
      ref={navigationRef}
    >
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Home" component={MainTabNav} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="StartUpSlider" component={StartUpSlider} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="VerifyCodeScreen" component={VerifyCodeScreen} />
        <Stack.Screen name="TargetScreen" component={TargetScreen} />
        <Stack.Screen name="StartLearning" component={StartLearning} />
        <Stack.Screen name="PersonalType" component={PersonalType} />
        <Stack.Screen name="EditProfileTwo" component={EditProfileTwo} />
        <Stack.Screen name="PurchaseCode" component={PurchaseCodeScreen} />
        <Stack.Screen name="Discount" component={DiscountScreen} />
        <Stack.Screen name="LessonScreen" component={LessonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;
