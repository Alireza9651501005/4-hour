import React from 'react';
import MainTabBar from './TabBar';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../home/HomeScreen';
import CourseScreen from '../course/CourseScreen';
import ProfileScreens from '../profile/ProfileScreen';
import EditProfileTwo from '../profile/EditProfileTwo';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName={'HomeScreen'}
            screenOptions={({ route, navigation }) => ({
                headerShown: false,
                unmountInactiveRoutes: true,
            })}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="CourseScreen" component={CourseScreen} />

        </Stack.Navigator>
    );
};

function ProfileStack() {
    return (
        <Stack.Navigator
            initialRouteName={'ProfileScreens'}
            screenOptions={({ route, navigation }) => ({
                headerShown: false,
                unmountInactiveRoutes: true,
            })}
        >
            <Stack.Screen name="ProfileScreens" component={ProfileScreens} />
        </Stack.Navigator>
    );
};

function TestStack() {
    return (
        <Stack.Navigator
            initialRouteName={'HomeScreen'}
            screenOptions={({ route, navigation }) => ({
                headerShown: false,
                unmountInactiveRoutes: true,
            })}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
};

const EmptyScreen= ()=><View style={{flex:1}} />
export default function TabNav() {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                headerShown: false,
                unmountInactiveRoutes: true,
            })}
            tabb initialRouteName={'HomeTab'}
            tabBar={props => <MainTabBar {...props} />}
        >
            <Tab.Screen options={{ title: 'تست' }} name="Test" component={EmptyScreen} />
            <Tab.Screen options={{ title: 'آموزش', unmountOnBlur: true }} name="HomeTab" component={HomeStack} />
            <Tab.Screen options={{ title: 'پروفایل', unmountOnBlur: true }} name="Profile" component={ProfileStack} />

        </Tab.Navigator>
    );
}
