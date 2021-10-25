import React from "react";
import { FlatList, TouchableOpacity, Image, View, ImageBackground } from "react-native";
import { scale, ScaledSheet, verticalScale } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { CText } from "../../../utils/components";
import { colors, sizes } from "../../../utils/constants/theme";
import { fontSize10, fontSize12, fontSize14 } from "../../../utils/helper/fontSizes";
import navigationService from "../../../utils/services/navigation/navigationService";
import MaterialAnimatedView from "../../home/components/MaterialAnimatedView";
import { saveSelectedLesson } from "../../lesson/actions/lessonActions";

export default function LessonListItem({ item, index }) {
    const dispatch = useDispatch()
    const handleOnTouchItem = () => {
        if (item.access) {
            navigationService.navigate('LessonScreen')
            dispatch(saveSelectedLesson(item))
        } else {
            navigationService.navigate('StartLearning')
        }

    }
    return (
        <MaterialAnimatedView key={index.toString()} index={index}>
            <TouchableOpacity
                onPress={handleOnTouchItem}
                activeOpacity={0.8} style={styles.container}>
                <ImageBackground
                    style={styles.imageWrapper}
                    source={{ uri: item.image_background }}
                >
                    <Image
                        style={styles.image}
                        source={{ uri: item.image }}
                    />
                </ImageBackground>
                <View style={{ width: '100%', paddingHorizontal: 5 }}>
                    <CText textType={'bold'} style={styles.title1}>{item.title1}</CText>
                    <CText textType={'ultraBold'} style={styles.title2}>{item.title2}</CText>
                </View>

                {item.is_done ?
                    <Image
                        style={{ width: scale(20), resizeMode: 'contain',position:'absolute',left:0 }}
                        source={require('../../../assets/images/lesson/tick.png')}
                    />
                    :
                    null
                }

            </TouchableOpacity>
        </MaterialAnimatedView>
    )
}

const styles = ScaledSheet.create({
    container: {
        borderWidth: 2,
        borderColor: '#fff',
        width: scale(145),
        // height:scale(145),
        backgroundColor: colors.whiteBg,
        borderRadius: sizes.globalRadius,
        alignItems: 'center',
        overflow: 'hidden'
    },
    image: {
        width: scale(50),
        height: scale(60),
        resizeMode: 'contain'
    },
    imageWrapper: {
        width: scale(145),
        height: scale(100),
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoWrapper: {
        flex: 1,
        paddingHorizontal: 10
    },
    title1: {
        fontSize: fontSize10,
        top: 3
    },
    title2: {
        fontSize: fontSize12
    }
})