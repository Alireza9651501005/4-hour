import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { CommentsList } from './CommentsList'
import { changeCommentText, changeCommentVisible, reactionComment, saveSelectedComment } from '../actions/commentsAction'
// import { RatingStars } from './RatingStars';
// import { reportcatchToFireBase } from '../../utils/helper/functions';
import { colors, sizes } from '../../../utils/constants/theme';
import { CText } from '../../../utils/components';
import CToast from '../../../utils/components/CToast';
import navigationService from '../../../utils/services/navigation/navigationService';
import { reactionCommentApi } from '../../../utils/constants/apiUrl';
import { fontSize10, fontSize12 } from '../../../utils/helper/fontSizes';


const CommentItem = ({ item, index, sub }) => {
    const states = useSelector(state => state);
    const commentsData = states.commentsReducer.listData
    const dispatch = useDispatch()
    let wordArray
    const txt = '@Mohammad سلام علیکم برادر adobeeee ps داری؟'
    try {
        wordArray = item.content.split(/(@\S{1,})/);
        // wordArray = txt.split(/(@\S{1,})/);


    } catch (error) {
        // reportcatchToFireBase(error, 'CommentItem.js/line:35')
        // wordArray = item.content
    }
    if (item.loading) {
        return (
            <View activeOpacity={0.6} style={sub ? itemStyle.subContainer : itemStyle.container}>
                <View style={[itemStyle.imageWrapper]}>
                    <Image
                        // resizeMode={'repeat'}
                        style={itemStyle.image}
                        source={require('../../../assets/images/common/no-image.png')} />
                </View>

                <View style={{ flex: 1, padding: 10 }}>
                    <CText>

                        {wordArray.map((text) => {
                            if (text[0] === '@') {
                                return (
                                    <CText
                                        // onPress={() => { text[0] === '@' && alert(text) }}

                                        style={[itemStyle.text, { color: colors.primary }]}
                                        // numberOfLines={1}
                                        fontSize={fontSize12}
                                        textColor={colors.grayBorder} >
                                        {text + ' '}
                                    </CText>

                                )
                            } else {
                                return (
                                    <CText
                                        style={[itemStyle.text, { color: colors.gray2 }]}
                                        // numberOfLines={1}
                                        fontSize={fontSize12}
                                        textColor={colors.grayBorder} >
                                        {text + ' '}
                                    </CText>
                                )

                            }

                        }

                        )}
                        در حال ارسال...
                    </CText>
                    {/* <ActivityIndicator color={'black'}/> */}
                </View>

            </View>

        )
    } else {
        return (
            < View style={[itemStyle.mainContainer, { marginTop: sub ? hp(0) : hp(2) }]} >
                <View
                    // onPress={() => onPress(props.actions)}
                    style={sub ? itemStyle.subContainer : itemStyle.container}>

                    <TouchableOpacity rippleSize={1}
                        // onPress={() => navigationService.navigate('Home', { id: item.user.id })}
                        style={{ alignItems: 'center' ,flexDirection:'row-reverse' }}>
                        <View style={[sub ? itemStyle.imageWrapperSub : itemStyle.imageWrapper, { justifyContent: 'flex-start' }]}>
                            <Image
                                // resizeMode={'repeat'}
                                style={sub ? itemStyle.imageSub : itemStyle.image}
                                source={item.user.image ? { uri: item.user.image } : require('../../../assets/images/common/no-image.png')} />

                        </View>

                        <CText textType={'bold'} style={{ color: colors.textBlack, direction: 'rtl', textAlign: 'right' ,marginRight:5 }}>
                            {item.user.name}
                        </CText>
                    </TouchableOpacity>

                    <View style={{ paddingRight: 10, alignItems: 'flex-end' }}>
                        <Text style={{ direction: 'rtl', textAlign: 'right' }}>
                            {wordArray.map((text) => {
                                if (text[0] === '@') {
                                    return (
                                        <CText
                                            // onPress={() => { navigationService.navigate('PublicProfileScreen', { id: text.slice(1) }) }}

                                            style={[itemStyle.text, { color: colors.primary }]}
                                            // numberOfLines={1}
                                            fontSize={fontSize12}
                                            textColor={colors.grayBorder} >
                                            <CText style={{ color: colors.whiteBg }}>i</CText>{text + ' '}
                                        </CText>

                                    )
                                } else {
                                    return (
                                        <CText
                                            style={[itemStyle.text, { color: colors.textBlack }]}
                                            // numberOfLines={1}
                                            fontSize={fontSize12}
                                            textColor={colors.grayBorder} >
                                            {text + ' '}
                                        </CText>
                                    )

                                }

                            }

                            )}
                        </Text>
                    </View>

                </View>

                {/* reply*/}
                <View style={{ flex: 1}}>
                    
                    <TouchableOpacity
                        rippleOpacity={0}
                        onPress={() => {
                            if (sub) {
                                dispatch(saveSelectedComment(sub.item.id, sub.index, item))
                                dispatch(changeCommentText('@' + item.user.username))
                            } else {
                                dispatch(saveSelectedComment(item.id, index, item))
                                dispatch(changeCommentText('@' + item.user.username + ' '))

                            }
                            dispatch(changeCommentVisible(true))
                        }}
                        style={{alignSelf:'flex-start', paddingRight: 10 ,marginLeft:wp(5) }}>
                        <Image
                            style={{ width: wp(4.3), height: wp(4.3), resizeMode: 'contain'}}
                            source={require('../../../assets/images/lesson/reply.png')}
                        />
                    </TouchableOpacity>
                </View>
                

                {/* sub comments list */}
                {item.children ?
                    <View >
                        <CommentsList sub={{ item: item, index: index }} listData={item.children} />
                    </View>
                    :
                    null
                }
            </View>

        )
    }

}

const itemStyle = StyleSheet.create({
    mainContainer: {
        width: '100%',
        backgroundColor: '#f0f0f0',
        alignSelf: 'center',
        borderRadius: sizes.globalRadius,
        // paddingBottom:5,
        // borderWidth: 1
    },
    container: {
        justifyContent: 'center',
        paddingRight: wp(3),
        paddingLeft: wp(3),
        // paddingTop: hp(1),
        marginTop: hp(1),
        // borderWidth:1
    },
    subContainer: {
        // alignSelf: 'center',
        borderRadius: wp(3),
        justifyContent: 'center',
        paddingRight: wp(1),
        paddingLeft: wp(1),
        // flexDirection: 'row-reverse',
        // marginTop: hp(1),
        marginRight: wp(10),
        flex:1,
        // borderWidth:1
    },
    image: {
        width: wp(7.5),
        height: wp(7.5),
        resizeMode: 'contain'
    },
    imageSub: {
        width: wp(7.5),
        height: wp(7.5),
        resizeMode: 'contain'
    },
    imageWrapper: {
        width: wp(7.5),
        height: wp(7.5),
        borderRadius: wp(4.5),
        borderWidth: 1,
        // borderColor: colors.grayBorder,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',

    },
    imageWrapperSub: {
        width: wp(7.5),
        height: wp(7.5),
        borderRadius: wp(4.5),
        borderWidth: 1,
        // borderColor: colors.grayBorder,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    text: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'right',
        direction: 'rtl'
    }
})

export { CommentItem }