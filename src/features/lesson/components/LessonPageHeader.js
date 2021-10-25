
import React, { Component } from 'react';
import { Animated, View, Image, Platform, TouchableOpacity } from 'react-native';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import { colors, sizes } from '../../../utils/constants/theme';
import { fontSize12, fontSize14 } from '../../../utils/helper/fontSizes';
import { danaBold, danaRegular, danaUltraBold } from '../../../utils/constants/fonts';
import { CText, PressableIcon } from '../../../utils/components';
import { likeLesson } from '../actions/lessonActions';

export default class LessonPageHeader extends Component {

    constructor(props) {
        super(props);
        this.state={userLiked:false}
    }

    componentDidMount(){
        this.setState({userLiked:this.props.infoData.user_liked_lesson})
    }
    //For header image height
    _getMainCOntainerHeight = () => {
        const { scrollY } = this.props;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [verticalScale(345), verticalScale(185)],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

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
            outputRange: [verticalScale(120), verticalScale(40)],
            extrapolate: 'clamp',
            useNativeDriver: true,
        });
    };

    //artist profile image height
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
            inputRange: [0, 1],
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
            outputRange: [verticalScale(150), verticalScale(15)],
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

    setLiked() {
        this.setState({userLiked:!this.state.userLiked})
    }

    render() {
        const { data, navigation, infoData, showReply } = this.props;
        const navState = navigation ? navigation.getState() : null;
        const stackLength = navState ? navState.routes.length : 1
        const largeHeaderHeight = this._getLargeHeaderHeight();

        const mainContainerHeight = this._getMainCOntainerHeight();


        const courseImageTop = this._getCourseImageTop();

        const courseIconWidth = this._getCourseIconWidth();

        const courseImageLeft = this._getCourseImageLeft();

        const title1PositionTop = this._getTitle1PositionTop();

        const title2PositionTop = this._getTitle2PositionTop();

        const courseIconHeight = this._getCourseIconHeight();

        const normalTitleOpacity = this._getNormalTitleOpacity();

        return (
            <Animated.View style={[styles1.container, {
                // opacity: headerImageOpacity,
                height: mainContainerHeight,
            }]}>

                {/* large header  
                contain some components in position absulte that animate and change positions or opacity in change 
                value that come from list scroll*/}
                <View style={styles1.headerImageWrapper}>
                    <Animated.Image
                        style={
                            [styles1.headerImageStyle, {
                                // opacity: headerImageOpacity,
                                height: largeHeaderHeight,
                            }]
                        }
                        source={{ uri: data.image_background }} />

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
                                    resizeMode: 'contain'
                                }]}
                                source={{ uri: data.image }}
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


                <View style={styles1.containerRelativeWrapper}>

                    {/* lesson toolbar --> like , comment , show info ,... */}
                    < View style={styles1.commentsToolBar} >
                        <View style={styles1.toolBarLeftSecion}>
                            <PressableIcon
                                iconImage={require('../../../assets/images/lesson/comment.png')}
                                onPress={() => { showReply(true) }}
                                containerStyle={{ marginRight: 5 }}
                            />

                            <PressableIcon
                                iconImage={
                                    this.state.userLiked ?
                                        require('../../../assets/images/lesson/like-on.png')
                                        :
                                        require('../../../assets/images/lesson/like-off.png')
                                }
                                onPress={() => { 
                                    if(this.state.userLiked){
                                        likeLesson('delete',infoData.id,this.setLiked.bind(this))
                                    }else{
                                        likeLesson('post',infoData.id,this.setLiked.bind(this))
                                    }
                                    this.setState({userLiked:!this.state.userLiked})

                                }}
                            />
                        </View>

                        <View style={styles1.toolBarRightSection}>
                            <PressableIcon
                                iconImage={require('../../../assets/images/lesson/time.png')}
                                title={infoData.total_hours}
                                iconStyle={styles1.showIconStyle}
                            />
                            <View style={styles1.toolbarSeparator} />
                            <PressableIcon
                                iconImage={require('../../../assets/images/lesson/like-on.png')}
                                title={infoData.likes}
                                iconStyle={styles1.showIconStyle}
                            />
                            <View style={styles1.toolbarSeparator} />

                            <PressableIcon
                                iconImage={require('../../../assets/images/lesson/comment-show.png')}
                                title={infoData.commentCount}
                                iconStyle={styles1.showIconStyle}
                            />
                        </View>
                    </View>

                    {/* show video and go to test buttons */}
                    <View style={styles1.largeButtonsWrapper}>
                        <View style={styles1.topLargeButtons} >
                            <CText textType={'demiBold'} style={styles1.largButtonTitle}>آزمون تعاملی</CText>
                            <Image
                                source={require('../../../assets/images/lesson/test-show.png')}
                                style={styles1.largeButtonImage}
                            />
                        </View>
                        <View style={{ width: scale(16) }} />
                        <View style={styles1.topLargeButtons} >
                            <CText textType={'demiBold'} style={styles1.largButtonTitle}>تماشای ویدیو</CText>
                            <Image
                                source={require('../../../assets/images/lesson/video-show.png')}
                                style={styles1.largeButtonImage}
                            />
                        </View>

                    </View>
                </View>

            </Animated.View>
        );
    }
}

const styles1 = ScaledSheet.create({
    container: {
        // borderWidth: 1,
        height: verticalScale(500),
        width: '100%',
        position: 'absolute',
        zIndex: 2
    },
    containerRelativeWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: colors.mainBG
    },
    commentsToolBar: {
        // borderWidth: 1,
        flexDirection: 'row',
        height: verticalScale(54),
        alignItems: 'center',
        marginHorizontal: scale(22),
        justifyContent: 'space-between'
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
        zIndex: 3
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
        fontSize: fontSize12,
        position: 'absolute',
        zIndex: 80,
        color: colors.textWhite,
        fontFamily: danaBold,
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
    },
    toolBarLeftSecion: {
        // borderWidth: 1,
        flexDirection: 'row'
    },
    toolBarRightSection: {
        // borderWidth: 1,
        flexDirection: 'row'
    },
    showIconStyle: {
        width: verticalScale(20)
    },
    toolbarSeparator: {
        height: verticalScale(15),
        borderRightWidth: 1,
        borderColor: '#b5b5b5',
        margin: 5
    },
    topLargeButtons: {
        flex: 1,
        height: verticalScale(80),
        backgroundColor: '#6c4c9a',
        borderRadius: sizes.globalRadius,
        alignItems: 'center',
        justifyContent: 'center'
    },
    largeButtonsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(22)
    },
    largButtonTitle: {
        fontSize: fontSize12,
        color: colors.textWhite
    },
    largeButtonImage: {
        height: verticalScale(50),
        resizeMode: 'contain'
    }
})
