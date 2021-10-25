
import React, { Component } from 'react';
import { Animated, View, Image, Platform, TouchableOpacity } from 'react-native';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import { colors, sizes } from '../../../utils/constants/theme';
import { fontSize12, fontSize14 } from '../../../utils/helper/fontSizes';
import { danaBold, danaRegular, danaUltraBold } from '../../../utils/constants/fonts';

export default class CoursePageHeader extends Component {

    constructor(props) {
        super(props);
    }

    //For header image height
    _getLargeHeaderHeight = () => {
        const { scrollY } = this.props;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [verticalScale(228), verticalScale(63)],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //artist profile image position from top
    _getCourseImageTop = () => {
        const { scrollY } = this.props;

        return scrollY.interpolate({
            inputRange: [0, 1],
            outputRange: [verticalScale(20), Platform.OS === 'ios' ? 8 : 10],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //course icon image width
    _getCourseIconWidth = () => {
        const { scrollY } = this.props;

        return scrollY.interpolate({
            inputRange: [0, 1],
            outputRange: [verticalScale(120),verticalScale(40)],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //course icon image height
    _getCourseIconHeight = () => {
        const { scrollY } = this.props;

        return scrollY.interpolate({
            inputRange: [0, 1],
            outputRange: [verticalScale(120), verticalScale(40)],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //user name position from left
    _getCourseImageLeft = () => {
        const { scrollY } = this.props;

        return scrollY.interpolate({
            inputRange: [0, 0.5],
            outputRange: [0, scale(140)],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //user name position from top
    _getTitle1PositionTop = () => {
        const { scrollY } = this.props;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [verticalScale(145), verticalScale(15)],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //login register text position from top
    _getTitle2PositionTop = () => {
        const { scrollY } = this.props;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [verticalScale(170), verticalScale(17)],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };


    //artist name opacity
    _getNormalTitleOpacity = () => {
        const { scrollY } = this.props;

        return scrollY.interpolate({
            inputRange: [0, 20, 50],
            outputRange: [1, 0.5, 0],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });

    };

    render() {
        const { data , navigation } = this.props;
        const navState = navigation ? navigation.getState() : null;
        const stackLength = navState ? navState.routes.length : 1
        // console.log('navigation ref', data)
        const largeHeaderHeight = this._getLargeHeaderHeight();

        const courseImageTop = this._getCourseImageTop();

        const courseIconWidth = this._getCourseIconWidth();

        const courseImageLeft = this._getCourseImageLeft();

        const title1PositionTop = this._getTitle1PositionTop();

        const title2PositionTop = this._getTitle2PositionTop();

        const courseIconHeight = this._getCourseIconHeight();

        const normalTitleOpacity = this._getNormalTitleOpacity();

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
                        source={{uri:data.image_background}} />
                </View>


                {/*  course image */}
                <Animated.View
                    style={
                        [styles1.courseIconWrapper, {
                            // borderWidth:1,
                            transform: [
                                { translateY: courseImageTop },
                                { translateX: courseImageLeft },
                            ],
                        }]}
                >
                    <TouchableOpacity>
                        <Animated.Image
                            style={[{
                                height: courseIconHeight,
                                width: courseIconWidth,
                                resizeMode:'contain'
                            }]}
                            source={{uri:data.image}}
                        />
                    </TouchableOpacity>

                </Animated.View>


                {/* course title 1*/}
                <Animated.Text
                    style={
                        [styles1.title1Style, {
                            opacity: normalTitleOpacity,
                            transform: [
                                { translateY: title1PositionTop },
                            ],
                        }]}
                >
                    {data.title1}
                </Animated.Text>

                {/* course title 2*/}
                <Animated.Text
                    style={
                        [styles1.title2Style, {
                            opacity: normalTitleOpacity,
                            transform: [
                                { translateY: title2PositionTop },
                            ],
                        }]}
                >
                    {data.title2}
                </Animated.Text>

                {/* back button  */}
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    disabled={stackLength > 1 ? false : true}
                    style={styles1.backButton}
                >
                    {stackLength > 1 ?
                        <Image
                            source={require('../../../assets/images/arrows/white-back.png')}
                            style={styles1.backimage}
                        />
                        : null}
                </TouchableOpacity>


            </View>
        );
    }
}

const styles1 = ScaledSheet.create({
    container: {
        // flex: 1,
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
    courseIconWrapper: {
        position: 'absolute',
        zIndex: 80,
        alignSelf: 'center',
        overflow: 'hidden',
        // backgroundColor: colors.whiteBg,
    },
    title2Style: {
        // width:scale(375),
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: fontSize14,
        position: 'absolute',
        zIndex: 80,
        color: colors.textWhite,
        fontFamily: danaUltraBold,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    title1Style: {
        // width:scale(375),
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: fontSize12,
        position: 'absolute',
        zIndex: 80,
        color: colors.textWhite,
        fontFamily: danaBold,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    backButton: {
        position: 'absolute',
        top: scale(16),
        left: scale(16),
        zIndex: 90
    },
    backimage: {
        width: scale(22),
        resizeMode: 'contain'
    }
})
