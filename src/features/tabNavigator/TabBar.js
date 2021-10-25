import React, { useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

import Svg, { Circle, Path } from 'react-native-svg';
import { fontSize14 } from '../../utils/helper/fontSizes';
import { CText } from '../../utils/components';
import { scale, verticalScale } from 'react-native-size-matters';
import { colors } from '../../utils/constants/theme';


export default function MainTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    const getIconSource = (route, isFocused) => {
        let iconSource
        if (route.name === 'HomeTab') {
            iconSource = isFocused ? require('../../assets/images/tabbar/home-on.png') : require('../../assets/images/tabbar/home-off.png')
        }
        else if (route.name === 'Profile') {
            iconSource = isFocused ? require('../../assets/images/tabbar/profile-on.png') : require('../../assets/images/tabbar/profile-off.png')
        }
        else if (route.name === 'Test') {
            iconSource = isFocused ? require('../../assets/images/tabbar/test-on.png') : require('../../assets/images/tabbar/test-off.png')
        }
        return iconSource
    }

    return (
        <View style={styles.mainContainer}>
            <ImageBackground
                imageStyle={{ resizeMode: 'stretch', width: '100%' }}
                source={require('../../assets/images/tabbar/tab-bg.png')}
                style={styles.container} >
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;
                    let iconSource = getIconSource(route, isFocused)
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };
                    if (isFocused) {
                        return (
                            <TouchableOpacity
                                key={index + 'a'}
                                accessibilityRole="button"
                                accessibilityStates={isFocused ? ['selected'] : []}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                // onPress={onPress}
                                onLongPress={onLongPress}
                                style={styles.activeItemWrapper}
                            >
                                <View style={styles.activeIconWrapper} >
                                    <Image
                                        source={iconSource}
                                        style={styles.activeIconImage}
                                    />
                                </View>
                                <CText style={styles.activeLabel}>
                                    {label}
                                </CText>
                            </TouchableOpacity>
                        );
                    } else {
                        return (
                            <TouchableOpacity
                                key={index + 'a'}
                                accessibilityRole="button"
                                accessibilityStates={isFocused ? ['selected'] : []}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={styles.inActiveWrapper}
                            >
                                <View style={styles.inActiveIconWrapper}>
                                    <Image
                                        source={iconSource}
                                        style={styles.inActiveIconImage}
                                    />
                                </View>
                                <CText textType={'light'} style={styles.inActiveLabel}>
                                    {label}
                                </CText>
                            </TouchableOpacity>
                        );
                    }

                })}
            </ImageBackground>
            < View style = {styles.bottomBarBg}
            />

        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: verticalScale(90),
        width: '100%',
        // paddingHorizontal: scale(10),
        // borderWidth: 1,
        zIndex: 100
    },
    mainContainer:{
        width: '100%',
        zIndex: 4,
        backgroundColor: 'transparent',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        // borderWidth: 1,
        borderColor: 'red',
        paddingBottom: verticalScale(5),
        alignItems: 'center',
        // justifyContent: 'center'
    },
    bottomBarBg:{
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        height: verticalScale(50),
        width: '100%',
        backgroundColor: colors.mainBG
    },
    activeItemWrapper: {
        flex: 1,
        // height: hp(9),
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom:hp(4),
        // backgroundColor: '#ccc'
    },
    activeIconWrapper: {
        width: verticalScale(38),
        height: verticalScale(38),
        // borderWidth: 1,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    activeIconImage: {
        width: verticalScale(38),
        height: verticalScale(38),
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    svgWrapper: {
        position: 'absolute',
        zIndex: 1
    },
    inActiveWrapper: {
        flex: 1,
        zIndex: 3,
        // height: hp(9),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#232a47',
        // backgroundColor: isFocused ? mainBlue : '#ccc'
    },
    inActiveIconWrapper: {
        width: verticalScale(38),
        height: verticalScale(38),
        // borderWidth:1,
        borderColor: '#fff',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inActiveIconImage: {
        width: verticalScale(24),
        height: verticalScale(24),
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    inActiveLabel: {
        color: '#fff',
        textAlign: 'center',
        fontSize: fontSize14
    },
    activeLabel: {
        color: '#fff',
        textAlign: 'center',
        fontSize: fontSize14
    }
});



