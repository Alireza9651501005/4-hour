
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Spinner from 'react-native-spinkit'
import { fontSize16, fontSize20 } from '../helper/fontSizes';
import { CText } from '.';
import { colors, sizes } from '../constants/theme';
import { scale, ScaledSheet } from 'react-native-size-matters';

const CButton = ({ onPress, children, btnStyle, labelStyle, loading, disable, backgroundColor }) => {
    const { buttonContainer, txtStyle } = styles
    return (
        <TouchableOpacity
            disabled={loading || disable}
            style={[buttonContainer, btnStyle, { backgroundColor: disable ? colors.disable : backgroundColor ? backgroundColor : colors.buttonPrimary }]}
            onPress={onPress} >

            <View>
                {loading ?
                    <Spinner isVisible={true} size={sizes.buttonSpinnerSize} type={'ThreeBounce'} color={colors.spinner} />
                    :
                    <View style={styles.buttonRow}>
                        <CText textStyle={'demiBold'} style={[txtStyle, labelStyle]}>{children}</CText>
                    </View>}
            </View>
        </TouchableOpacity>
    )
}

const styles = ScaledSheet.create({
    buttonContainer: {
        borderRadius: sizes.globalRadius,
        minHeight: '45@vs',
        minWidth: scale(105),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        // borderWidth: 1,
        backgroundColor: colors.buttonPrimary
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtStyle: {
        fontSize: fontSize16,
        color: colors.textWhite,
    }
})

export { CButton };
