import React, { useState } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Spinner from 'react-native-spinkit';
import { useDispatch, useSelector } from 'react-redux';
import { CText, HeaderWithText } from '../../utils/components';
import { colors, sizes } from '../../utils/constants/theme';
import { fontSize16 } from '../../utils/helper/fontSizes';
import { verifyCodeAction } from './actions/verifyCodeActions';
import VerifyCodeInput from './components/VerifyCodeInput';
import { loginPageTitle, registerPageTitle, verifyPageDescription, verifyPageMessage } from './texts';


function VerifyCodeScreen({ route, navigation }) {
    const state = useSelector(state => state)
    const loading = state.verifyCodeReducer.loading;
    const phoneNumber = state.authReducer.phoneNumber
    const authMode = state.authReducer.authMode

    const pressabletext = <CText onPress={() => alert()}>اینجا</CText>
    return (
        <View style={styles.container}>
            <HeaderWithText
                title={authMode === 'login' ? loginPageTitle : registerPageTitle}
                description={verifyPageDescription}
            />
            <View style={styles.body}>
                <VerifyCodeInput
                    onCodeAction={verifyCodeAction}
                    phoneNumber={phoneNumber}
                />
                {loading ?
                    <View style={styles.spinnerWrapper}>
                        <Spinner isVisible={true} size={sizes.buttonSpinnerSize} type={'ThreeBounce'} color={colors.coloredSpinner} />
                    </View>
                    : null
                }
                <CText style={styles.verifyPageMessage}>
                    کد را به  {phoneNumber} ارسال کردیم، در صورت نیاز به تغییر شماره موبایل و یا ایمیل
                    <CText style={{ textDecorationLine: 'underline' }} onPress={() => navigation.goBack()}> اینجا </CText>
                    را لمس کنید</CText>
            </View>

        </View>
    );
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    body: {
        paddingRight: sizes.globalMarginHorizontal,
        paddingLeft: sizes.globalMarginHorizontal,
        paddingTop: sizes.globalMarginVertical,
    },
    buttonStyle: {
        marginTop: '11@vs'
    },
    verifyPageMessage: {
        marginTop: sizes.globalMarginVertical,
        fontSize: fontSize16
    },
    spinnerWrapper: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default VerifyCodeScreen;
