import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { verticalScale } from 'react-native-size-matters';
import { CText } from '.';
import { colors } from '../constants/theme';
import { fontSize12 } from '../helper/fontSizes';

function PressableIcon({ title, iconImage, onPress, iconStyle, containerStyle }) {

    return (
        <TouchableOpacity
            touchSoundDisabled={true}
            disabled={!onPress}
            onPress={onPress}
            // onStartShouldSetResponder={onPress}
            // onPressIn={onPress}
            style={[styles.container, containerStyle]}>
            <Image
                source={iconImage}
                style={[styles.iconStyle, iconStyle]}
            />
            {title || title==0 ?
                <CText style={styles.title}>{title}</CText>
                : null
            }

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1
    },
    iconStyle: {
        width: verticalScale(25),
        height: verticalScale(25),
        resizeMode: 'contain'
    },
    title: {
        fontSize: fontSize12,
        marginLeft: 1,
        color: colors.textBlack,
        top: 2
    }
})

export { PressableIcon }