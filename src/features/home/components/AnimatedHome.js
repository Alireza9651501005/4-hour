
import React, { Component } from 'react';
import { Animated, View, StatusBar, Text, Image, Platform, StyleSheet, Linking, TouchableOpacity, RefreshControl } from 'react-native';
import CourseItem from '../components/CourseItem';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import { colors, sizes } from '../../../utils/constants/theme';
import { fontSize14, fontSize16, fontSize18, fontSize20 } from '../../../utils/helper/fontSizes';
import { danaRegular } from '../../../utils/constants/fonts';
import navigationService from '../../../utils/services/navigation/navigationService';
import CToast from '../../../utils/components/CToast';

const USER_NAME = 'سعید کاویانی پور';

export default class AnimatedHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
        };
    }

    //For header background color from transparent to header color
    _getHeaderBackgroundColor = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: ['rgba(0,0,0,0.0)', '#6c40a4'],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //For header image opacity
    _getHeaderImageOpacity = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [1, 0],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //For header image height
    _getLargeHeaderHeight = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [verticalScale(228), verticalScale(63)],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //artist profile image position from left
    _getImageLeftPosition = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -scale(150)],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //artist profile image position from top
    _getImageTopPosition = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 1],
            outputRange: [verticalScale(20), Platform.OS === 'ios' ? 8 : 10],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //artist profile image width
    _getImageWidth = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 1],
            outputRange: [verticalScale(102), verticalScale(40)],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //artist profile image height
    _getImageHeight = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 1],
            outputRange: [verticalScale(102),  verticalScale(40)],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //user name position from left
    _getNameLeftPosition = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 1],
            outputRange: [0, scale(110)],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //user name position from top
    _getNameTopPosition = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [verticalScale(145), verticalScale(15)],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //login register text position from top
    _getLoginRegisterTextTop = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 1],
            outputRange: [verticalScale(170), verticalScale(17)],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //user name width
    _getNameWidth = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [scale(375), scale(100)],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //artist profile image border width
    _getImageBorderWidth = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [4, 0],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //artist profile image border width
    _getImageInnerBorderWidth = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [4, 0],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //artist profile image border color
    _getImageBorderColor = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: ['#fff', 'rgba(0,0,0,0.0)'],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //artist profile image border color
    _getImageInnerBorderColor = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: ['#000', 'rgba(0,0,0,0.0)'],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //Song list container position from top
    _getListViewTopPosition = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 250],
            outputRange: [verticalScale(190), 0],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //header title opacity
    _getHeaderTitleOpacity = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 20, 50],
            outputRange: [0, 0.5, 1],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //title name opacity
    _getNormalTitleOpacity = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });

    };

    //purchase button opacity
    _getPurchaseButtonOpacity = () => {
        const { scrollY } = this.state;

        return scrollY.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });

    };

    render() {
        const { data } = this.props;
        const list = data.courses;
        const profile = data.user;
        // console.log('=======', data, list, profile)
        const headerBackgroundColor = this._getHeaderBackgroundColor();

        const largeHeaderHeight = this._getLargeHeaderHeight();

        const headerImageOpacity = this._getHeaderImageOpacity();

        const profileImageLeft = this._getImageLeftPosition();

        const profileImageTop = this._getImageTopPosition();

        const profileImageWidth = this._getImageWidth();

        const namePositionLeft = this._getNameLeftPosition();

        const namePositionTop = this._getNameTopPosition();

        const loginRegisterTextTop = this._getLoginRegisterTextTop();

        const namePositionWidth = this._getNameWidth();

        const profileImageHeight = this._getImageHeight();

        const profileImageBorderWidth = this._getImageBorderWidth();

        const profileImageBorderColor = this._getImageBorderColor();

        const profileImageInnerBorderWidth = this._getImageInnerBorderWidth();

        const profileImageInnerBorderColor = this._getImageInnerBorderColor();

        const listViewTop = this._getListViewTopPosition();

        const headerTitleOpacity = this._getHeaderTitleOpacity();

        const normalTitleOpacity = this._getNormalTitleOpacity();

        const purchaseButtonOpacity = this._getPurchaseButtonOpacity();

        return (
            <View style={styles1.container}>
                {/* large header  */}
                <View style={styles1.headerImageWrapper}>
                    <Animated.Image
                        style={
                            [styles1.headerImageStyle, {
                                // opacity: headerImageOpacity,
                                height: largeHeaderHeight,
                            }]
                        }
                        source={require('../../../assets/images/common/header-bg-center.png')} />

                    {/* user levels achivments section*/}
                    {profile && profile.personal_type ? <Animated.View style={[styles1.levelsView, { opacity: normalTitleOpacity }]}>
                        {profile.levels.map((item, index) => {
                            return (
                                <View key={index.toString()} style={{ borderRadius: verticalScale(20), overflow: 'hidden' }} >
                                    <Image
                                        style={{ width: verticalScale(40), height: verticalScale(40) }}
                                        source={{ uri: item.image }}
                                    />
                                </View>
                            )
                        })}
                    </Animated.View> : null}
                </View>

                {/* purchase button */}
                {profile ?
                    profile.is_costumer == false ?
                        <Animated.View style={[styles1.purchaseIconWrapper, { opacity: purchaseButtonOpacity }]}>
                            <TouchableOpacity
                                onPress={() => { navigationService.navigate('StartLearning') }}
                            >
                                <Image
                                    style={styles1.purchaseIcon}
                                    source={require('../../../assets/images/home/purchase-icon.png')}
                                />
                            </TouchableOpacity>
                        </Animated.View>
                        : null : null}

                {/* small header */}
                <Animated.View style={[styles1.headerStyle, {
                    backgroundColor: headerBackgroundColor,
                }]}>

                </Animated.View>

                {/* user image  */}
                <Animated.View
                    style={
                        [styles1.profileImageWrapper, {
                            borderWidth: profileImageBorderWidth,
                            borderColor: profileImageBorderColor,
                            borderRadius: verticalScale(70),
                            transform: [
                                { translateY: profileImageTop },
                                { translateX: profileImageLeft },
                            ],
                        }]}
                >
                    <Animated.View style={
                        {
                            borderRadius: verticalScale(55),
                            overflow: 'hidden',
                            borderWidth: profileImageInnerBorderWidth,
                            borderColor: profileImageInnerBorderColor
                        }
                    } >
                        <TouchableOpacity>
                            <Animated.Image
                                style={[{
                                    height: profileImageHeight,
                                    width: profileImageWidth,
                                }]}
                                source={profile ? { uri: profile.image } : require('../../../assets/images/common/no-image.png')}
                            />
                        </TouchableOpacity>
                    </Animated.View>

                </Animated.View>

                {/* user name animated text */}
                {profile && profile.personal_type != null ?
                    <Animated.Text
                        style={
                            [styles1.userNameStyle, {
                                // width: namePositionWidth,
                                transform: [
                                    { translateY: namePositionTop },
                                    { translateX: namePositionLeft },
                                ],
                            }]}
                    >
                        {profile.name}
                    </Animated.Text>
                    :
                    null
                }

                {/* login register description when user is not login */}
                {!profile ?
                    <Animated.Text
                        style={
                            [styles1.loginRegisterDescription, {
                                opacity: normalTitleOpacity,
                                transform: [
                                    { translateY: namePositionTop },
                                    // { translateX: namePositionLeft },
                                ],
                            }]}
                    >
                        {'برای انجام آزمون دیسک ابتدا ثبت نام کنید'}
                    </Animated.Text> :
                    null
                }

                {/* login register text when user is not login */}
                {!profile ?
                    <Animated.View
                        style={
                            [styles1.loginRegisterTextWrapper, {
                                transform: [
                                    { translateY: loginRegisterTextTop },
                                    { translateX: namePositionLeft },
                                ],
                            }]}
                    >
                        <TouchableOpacity style={{ zIndex: 99 }} onPress={() => navigationService.navigate('TargetScreen')}>
                            <Animated.Text style={[styles1.loginRegisterText]}>
                                {'ثبت‏‌نام / ورود'}
                            </Animated.Text>
                        </TouchableOpacity>
                    </Animated.View> :
                    null
                }

                {/* not examed description when user is not login */}
                {profile && profile.personal_type == null ?
                    <Animated.Text
                        style={
                            [styles1.loginRegisterDescription, {
                                opacity: normalTitleOpacity,
                                transform: [
                                    { translateY: namePositionTop },
                                    // { translateX: namePositionLeft },
                                ],
                            }]}
                    >
                        {'هنوز آزمون دیسک را کامل نکرده‌اید'}
                    </Animated.Text> :
                    null
                }

                {/* not examed text when user is not login */}
                {profile && profile.personal_type == null ?
                    <Animated.View
                        style={
                            [styles1.loginRegisterTextWrapper, {
                                transform: [
                                    { translateY: loginRegisterTextTop },
                                    { translateX: namePositionLeft },
                                ],
                            }]}
                    >
                        <TouchableOpacity style={{ zIndex: 99 }} onPress={() => CToast('در حال اجرا')}>
                            <Animated.Text style={[styles1.loginRegisterText]}>
                                {'شرکت در آزمون'}
                            </Animated.Text>
                        </TouchableOpacity>
                    </Animated.View> :
                    null
                }

                {/* body and coures list */}
                <Animated.ScrollView
                    refreshControl={this.props.onPullDown ?
                        <RefreshControl
                            refreshing={false}
                            onRefresh={() => this.props.onPullDown()}
                            progressViewOffset={verticalScale(190)}
                        />
                        : null
                    }
                    overScrollMode={'never'}
                    style={{ zIndex: 10 }}
                    contentContainerStyle={{ paddingBottom: verticalScale(100) }}
                    scrollEventThrottle={16}
                    onScroll={Animated.event([{
                        nativeEvent: { contentOffset: { y: this.state.scrollY } },
                    }], {
                        listener: (event) => {
                        },
                        useNativeDriver: false,
                    })}>
                    <Animated.View style={{
                        // marginVertical: sizes.globalMarginVertical,
                        marginHorizontal: scale(22),
                        transform: [{
                            translateY: listViewTop,
                        }],
                    }}>
                        {list.map((item, index) => { return (<CourseItem key={index.toString()} item={item} index={index} />) })}
                    </Animated.View>

                </Animated.ScrollView>
            </View>
        );
    }
}

const styles1 = ScaledSheet.create({
    container: {
        flex: 1,
    },
    /*Top Image Style*/
    headerImageStyle: {
        height: verticalScale(228),
        width: '100%',

    },
    headerImageWrapper: {
        // height: verticalScale(228),
        width: '100%',
        top: -5,
        alignSelf: 'center',
        position: 'absolute',
        borderBottomLeftRadius: scale(20),
        borderBottomRightRadius: scale(20),
        overflow: 'hidden',
        zIndex: 70
    },
    /*profile image style*/
    profileImageWrapper: {
        position: 'absolute',
        zIndex: 80,
        alignSelf: 'center',
        overflow: 'hidden',
        backgroundColor: colors.whiteBg,
    },
    userNameStyle: {
        // width:scale(375),
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: fontSize16,
        position: 'absolute',
        zIndex: 80,
        color: colors.textWhite,
        fontFamily: danaRegular,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    loginRegisterDescription: {
        // width:scale(375),
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: fontSize16,
        position: 'absolute',
        zIndex: 80,
        color: colors.textYellow,
        fontFamily: danaRegular,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    loginRegisterText: {
        // width:scale(375),
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: fontSize14,
        // position: 'absolute',
        // zIndex: 80,
        color: colors.textYellow,
        fontFamily: danaRegular,
        borderWidth: 1,
        borderColor: 'transparent',
        textDecorationLine: 'underline'
    },
    loginRegisterTextWrapper: {
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 90,
        borderWidth: 1,
        borderColor: 'transparent',
        // borderWidth:5
    },
    headerStyle: {
        height: verticalScale(60),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
        borderBottomLeftRadius: scale(20),
        borderBottomRightRadius: scale(20),
    },
    levelsView: {
        height: verticalScale(60),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'absolute',
        // backgroundColor: 'red',
        bottom: 0,
        flexDirection: 'row',
        paddingHorizontal: scale(10),
        // borderWidth:1
    },
    purchaseIconWrapper: {
        height: scale(42),
        width: scale(42),
        position: 'absolute',
        left: scale(17),
        top: verticalScale(11),
        zIndex: 80
    },
    purchaseIcon: {
        width: scale(40),
        height: scale(40),
        resizeMode: 'contain'
    }
})
