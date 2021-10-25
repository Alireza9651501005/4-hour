import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { colors, sizes } from '../../utils/constants/theme';
import { getHomeData } from '../home/actions/homeAction';
import { RetryButton } from '../../utils/components';
import { getLessonDetailData, getLessonsData } from './actions/lessonActions';
import LessonDetailAnimated from './components/LessonDetailAnimated';

function LessonScreen({ route, navigation }) {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const loading = state.lessonReducer.loading
    const error = state.lessonReducer.error
    const lessonsData = state.lessonReducer.lessonDetailData
    const selectedLesson = state.lessonReducer.selectedLesson

    useEffect(() => {
        getLessonDetail()
    }, [])

    const getLessonDetail = () => {
        getLessonDetailData(selectedLesson.id)
    }

    return (
        <View style={styles.container}>
            {loading || error ?
                <RetryButton
                    onPress={getLessonDetail}
                    loading={loading}
                />
                :
                <LessonDetailAnimated
                    headerItem={selectedLesson}
                    onPullDown={getLessonDetail}
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

export default LessonScreen;
