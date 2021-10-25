import React from "react";
import { FlatList, TouchableOpacity, Image, View, ImageBackground } from "react-native";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { CText } from "../../../utils/components";
import { colors, sizes } from "../../../utils/constants/theme";
import { fontSize12, fontSize14 } from "../../../utils/helper/fontSizes";
import navigationService from "../../../utils/services/navigation/navigationService";
import { saveSelectedCourse } from "../../course/actions/courseActions";
import MaterialAnimatedView from "./MaterialAnimatedView";

export default function CourseItem({ item, index }) {
    const dispatch = useDispatch()
    const handleOnTouchItem = () => {
        dispatch(saveSelectedCourse(item))
        navigationService.navigate('CourseScreen')
    }
    return (
        <MaterialAnimatedView key={index.toString()} index={index}>
            <TouchableOpacity
                onPress={handleOnTouchItem}
                activeOpacity={0.8} style={styles.container}>
                <ImageBackground 
                source={{ uri: item.image_background }}
                style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        source={{ uri: item.image }}
                    />
                </ImageBackground>
                <View style={styles.infoWrapper}>
                    <CText textType={'bold'} style={{ fontSize: fontSize12 }}>{item.title1}</CText>
                    <CText textType={'ultraBold'} style={{ fontSize: fontSize14 }}>{item.title2}</CText>
                    <CText textType={'light'} numberOfLines={2} style={{ fontSize: fontSize12 }} >{item.description}</CText>
                </View>

            </TouchableOpacity>
        </MaterialAnimatedView>
    )
}

const styles = ScaledSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#f5f5f5',
        maxHeight: verticalScale(96),
        marginBottom: verticalScale(20),
        flexDirection: 'row-reverse',
        backgroundColor: colors.whiteBg,
        borderRadius: sizes.globalRadius,
        alignItems: 'center'
    },
    image: {
        width: verticalScale(75),
        height: verticalScale(75)
    },
    imageWrapper: {
        width: verticalScale(96),
        height: verticalScale(96),
        borderRadius: sizes.globalRadius,
        overflow: 'hidden',
        alignItems:'center',
        justifyContent:'center'
    },
    infoWrapper: {
        flex: 1,
        paddingHorizontal: 10
    }
})