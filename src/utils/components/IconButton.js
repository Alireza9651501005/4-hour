
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Spinner from 'react-native-spinkit'
import { fontSize20 } from '../helper/fontSizes';
import { CText } from '.';
import { colors, sizes } from '../constants/theme';
import { ScaledSheet } from 'react-native-size-matters';

const IconButton = ({ onPress, imageSource, btnStyle, labelStyle, loading, disable, backgroundColor }) => {
    const { buttonContainer, txtStyle } = styles
    return (
        <TouchableOpacity
            disabled={loading || disable}
            style={[buttonContainer, btnStyle, { backgroundColor: disable ? colors.disable : backgroundColor ? backgroundColor : colors.buttonPrimary }]}
            onPress={onPress} >
            <Image
                style={styles.iconStyle}
                source={imageSource}
            />
        </TouchableOpacity>
    )
}

const styles = ScaledSheet.create({
    buttonContainer: {
        borderRadius: sizes.globalRadius,
        height: '45@vs',
        width: '45@vs',
        alignItems: 'center',
        justifyContent: 'center',
        // alignSelf: 'flex-start',
        borderWidth: 1,
        backgroundColor: colors.buttonPrimary
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtStyle: {
        fontSize: fontSize20,
        color: colors.textWhite,
    },
    iconStyle: {
        height: '23@vs',
        width: '23@vs',
    }
})

export { IconButton };
