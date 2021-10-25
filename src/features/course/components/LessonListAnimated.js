
import React, { Component } from 'react';
import { Animated, View, RefreshControl } from 'react-native';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import { sizes } from '../../../utils/constants/theme';
import CoursePageHeader from './CoursePageHeader';
import LessonListItem from './LessonListItem';

export default class CourseListAnimated extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
        };
    }

    render() {
        const { data } = this.props;
        const list = data.lessons;
        // console.log('lessons data', data, list)

        return (
            <View style={styles.container}>

                {/* course header animated */}
                <CoursePageHeader
                    data={this.props.headerItem}
                    scrollY={this.state.scrollY}
                    route={this.props.route}
                    navigation={this.props.navigation}
                />
                {/* body and Lesson list */}
                <Animated.FlatList
                    refreshControl={this.props.onPullDown ?
                        <RefreshControl
                            refreshing={false}
                            onRefresh={() => this.props.onPullDown()}
                            progressViewOffset={verticalScale(190)}
                        />
                        : null
                    }
                    numColumns={2}
                    data={list}
                    overScrollMode={'never'}
                    style={{ zIndex: 10 }}
                    contentContainerStyle={styles.listContentStyle}
                    scrollEventThrottle={16}
                    ListHeaderComponent={() => <View style={{ height: verticalScale(240) }} />}
                    onScroll={Animated.event([{
                        nativeEvent: { contentOffset: { y: this.state.scrollY } },
                    }], {
                        listener: (event) => {
                        },
                        useNativeDriver: false,
                    })}
                    renderItem={({ item, index }) => <LessonListItem item={item} index={index} />}
                    ItemSeparatorComponent={({ item, index }) => <View style={styles.listSeparator} />}
                    columnWrapperStyle={styles.listColumn}
                />
            </View>
        );
    }
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
        justifyContent: 'space-between',
        flexDirection: 'row-reverse'
    },
    listSeparator: {
        width: 50,
        height: scale(16)
    }
})
