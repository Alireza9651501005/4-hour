import React from "react";
import { View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { CText } from '.'
import { colors } from "../constants/theme";
import { fontSize14, fontSize16, fontSize20 } from "../helper/fontSizes";
import navigationService, { navigationRef } from "../services/navigation/navigationService";
function HeaderWithText({ title, description, style }) {
    // console.log('==== navigation ref', navigationRef.current.getState())
    const navState = navigationRef.current ? navigationRef.current.getState() : null;
    const stackLength = navState ? navState.routes.length : 1

    const headerStyle = [styles.container, style]
    const handleBackButton = () => {
        navigationService.goBack()
    }
    return (
        <ImageBackground
            source={require('../../assets/images/common/header-bg.png')}
            imageStyle={styles.bgImage}
            style={headerStyle}>
            <View style={styles.topSection}>
                <CText style={styles.title}>{title}</CText>
                <TouchableOpacity
                    disabled={stackLength > 1 ? false : true}
                    onPress={handleBackButton}
                >
                    {stackLength > 1 ?
                        <Image
                            source={require('../../assets/images/arrows/white-back.png')}
                            style={styles.iconStyle}
                        />
                        : null}
                </TouchableOpacity>
            </View>
            <View style={styles.descriptionWrapper}>
                <CText textType={'light'} style={styles.description} numberOfLines={5}>{description}</CText>
            </View>
        </ImageBackground>
    )
}

const styles = ScaledSheet.create({
    container: {
        width: '100%',
        // height: '60@vs',
        paddingTop: '29@vs',
        paddingBottom: '30@vs',
        borderBottomLeftRadius: '20@s',
        borderBottomRightRadius: '20@s',
        overflow: 'hidden'
    },
    iconStyle: {
        height: verticalScale(29),
        width: verticalScale(22),
        resizeMode: 'contain'
    },
    topSection: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: '22@s',
        paddingLeft: '36@s',
    },
    bgImage: {
        width: '375@s',
        resizeMode: 'cover'
    },
    title: {
        color: colors.textWhite,
        fontSize: fontSize14
    },
    description: {
        color: colors.textDarkWhite,
        fontSize: fontSize16,
        marginTop: '10@vs'
    },
    descriptionWrapper: {
        // flex: 1,
        justifyContent: 'center',
        paddingRight: '36@s',
        paddingLeft: '36@s',
    }
})

export { HeaderWithText }