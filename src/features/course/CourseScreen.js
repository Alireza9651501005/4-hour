import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { colors, sizes } from '../../utils/constants/theme';
import { getHomeData } from '../home/actions/homeAction';
import { RetryButton } from '../../utils/components';
import LessonListAnimated from './components/LessonListAnimated';
import { getLessonsData } from './actions/courseActions';

function CourseScreen({ route, navigation }) {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const loading = state.courseReducer.loading
    const error = state.courseReducer.error
    const lessonsData = state.courseReducer.lessonsData
    const selectedCourse = state.courseReducer.selectedCourse

    useEffect(() => {
        getLessonsData(selectedCourse.id)
    }, [])

    const getLessonData = () => {
        getLessonsData(selectedCourse.id)
    }

    return (
        <View style={styles.container}>
            {loading || error ?
                <RetryButton
                    onPress={getLessonData}
                    loading={loading}
                />
                :
                <LessonListAnimated
                    headerItem={selectedCourse}
                    onPullDown={getLessonData}
                    data={lessonsData}
                    route={route}
                    navigation={navigation}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.mainBG
    },
    spinnerWrapper: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CourseScreen;
