import React from 'react'
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import { CText } from '.'
import Spinner from 'react-native-spinkit'
import { colors, sizes } from '../constants/theme'
import { fontSize16 } from '../helper/fontSizes'
import { scale, verticalScale } from 'react-native-size-matters'

const RetryButton = ({ onPress, loading, style }) => {
    const containerStyle = [
        styles.container,
        style
    ]
    return <View style={containerStyle}>
        {loading ?
            <View style={styles.spinnerWrapper}>
                <Spinner isVisible={true} size={sizes.buttonSpinnerSize} type={'ThreeBounce'} color={colors.coloredSpinner} />
            </View>
            :
            <View>
                <Image
                    style={styles.imageStyle}
                    source={require('../../assets/images/common/retry-image.png')}
                />
                <CText
                    textType={'demiBold'}
                    style={styles.textStyle}
                >
                    دوباره امتحان کنید
                </CText>

                <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.6}>

                    <Image
                        style={styles.image}
                        source={require('../../assets/images/common/retry.png')} />

                </TouchableOpacity>
            </View>
        }
    </View>
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.mainBG,
        // borderWidth:1
        // flexDirection: 'row',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: verticalScale(90),
        flex: 1
    },
    image: {
        width: verticalScale(51),
        height: verticalScale(51),
        resizeMode: 'contain',
        // marginRight: hp(1)
    },
    spinnerWrapper: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: fontSize16,
        color: colors.textBlack,
        alignSelf: 'center',
        marginBottom: verticalScale(10)
    },
    imageStyle: {
        width: scale(200),
        resizeMode: 'contain',
        marginBottom: verticalScale(15)
    }
})

export { RetryButton }