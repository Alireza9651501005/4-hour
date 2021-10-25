
import React, { Component, useState } from 'react';
import { Animated, View, RefreshControl } from 'react-native';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { changeCommentVisible } from '../../comments/actions/commentsAction';
import CommentsScreen from '../../comments/CommentsScreen';
import LessonPageHeader from './LessonPageHeader';

export default function LessonDetailAnimated({ data, headerItem, route, navigation }) {

    const [state, setstate] = useState({ scrollY: new Animated.Value(0) })
    const dispatch = useDispatch()
    const setShowReply = (value) => {
        dispatch(changeCommentVisible(value))
    }

    return (
        <View style={styles.container}>

            {/* course header animated */}
            <LessonPageHeader
                showReply={setShowReply}
                data={headerItem}
                infoData={data}
                scrollY={state.scrollY}
                route={route}
                navigation={navigation}
            />
            
            {/* body and Lesson list */}
            {/* set header on comments list flat list based on lesson page header height for scroll space */}
            <CommentsScreen
                onScroll={Animated.event([{
                    nativeEvent: { contentOffset: { y: state.scrollY } },
                }], {
                    listener: (event) => {
                    },
                    useNativeDriver: false,
                })}
                setShowReply={setShowReply}
                lessonId={1} />
        </View>
    );
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    listContentStyle: {
        paddingBottom: verticalScale(100),
        paddingHorizontal: scale(22)
    },
    listColumn: {
        justifyContent: 'space-between'
    },
    listSeparator: {
        width: 50,
        height: scale(16)
    }
})
