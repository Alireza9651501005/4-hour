import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, View, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { CommentItem } from './CommentItem'
import { getComments } from '../actions/commentsAction'
import ListEmptyComponent from './ListEmptyComponent'
import { colors, sizes } from '../../../utils/constants/theme'
import { lessonCommentsApi } from '../../../utils/constants/apiUrl'
import { scale, verticalScale } from 'react-native-size-matters'


const ListFooter = ({ loading }) => {
    if (loading) {
        return (
            <View style={{ height: 20, width: '100%' }}>
                <ActivityIndicator color={'#00b'} />
            </View>
        )
    } else {
        return (
            <View></View>
        )
    }
}


const CommentsList = (props) => {
    const dispatch = useDispatch()
    const states = useSelector(state => state)
    const { listLoading, headerComponent } = props
    let contents = states.commentsReducer.commentsData
    let pageNum = states.commentsReducer.pageNum
    let listData = states.commentsReducer.listData
    // //console.log('comments props==>',props.lessonId , props.sub ,props)
    const onEndFunction = () => {
        // //console.log('en reach',listData,pageNum)
        const url = lessonCommentsApi + props.lessonId + '/comments'
        if (pageNum <= contents.last_page) {
            dispatch(getComments('get', url, pageNum, listData))
        }
    }
    return (
        <View style={styles.container}>

            <FlatList
                ListEmptyComponent={!props.sub ? () => <ListEmptyComponent /> : null}
                scrollEnabled={props.sub}
                refreshControl={props.onPullDown ?
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => props.onPullDown()}
                        progressViewOffset={verticalScale(320)}
                    />
                    : null
                }
                onScroll={props.onScroll}
                style={{ paddingHorizontal:props.sub ?0: scale(22) }}
                contentContainerStyle={{ paddingBottom: hp(3) }}
                data={props.listData}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item, index }) => <CommentItem sub={props.sub} item={item} index={index} />}
                ListFooterComponent={props.sub ? null : () => <ListFooter loading={listLoading} />}
                ListHeaderComponent={props.sub ? null : <View style={{ height: verticalScale(349) }} />}
                onEndReached={props.sub ? () => { console.log('no end method') } : () => onEndFunction()}
                onEndReachedThreshold={0.3}
            // maxToRenderPerBatch={3}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    },
    line: {
        marginHorizontal: sizes.horizontalMargin15,
        height: hp(0.3),
        marginTop: hp(0.6),
        marginBottom: sizes.verticalMargin10,
        backgroundColor: colors.primary
    },
    textBox: {
        marginHorizontal: sizes.horizontalMargin15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    item: {
        paddingBottom: sizes.verticalMargin10,
        paddingRight: sizes.horizontalMargin15
    },
    lastItem: {
        paddingBottom: sizes.verticalMargin10,
        paddingHorizontal: sizes.horizontalMargin15
    }
})
export { CommentsList }